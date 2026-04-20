class DeckStage extends HTMLElement {
  constructor() {
    super();
    this._idx = 0;
  }

  connectedCallback() {
    const w = parseInt(this.getAttribute('width') || 1920);
    const h = parseInt(this.getAttribute('height') || 1080);
    this._w = w;
    this._h = h;

    Object.assign(this.style, {
      display: 'block',
      position: 'fixed',
      inset: '0',
      background: '#000',
      overflow: 'hidden',
    });

    // Wrap a scaler div
    this._scaler = document.createElement('div');
    Object.assign(this._scaler.style, {
      position: 'absolute',
      width: w + 'px',
      height: h + 'px',
      transformOrigin: 'top left',
    });

    // Move all children into scaler
    while (this.firstChild) this._scaler.appendChild(this.firstChild);
    this.appendChild(this._scaler);

    this._slides = Array.from(this._scaler.querySelectorAll('section'));
    this._slides.forEach((s, i) => {
      Object.assign(s.style, {
        position: 'absolute',
        inset: '0',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        opacity: i === 0 ? '1' : '0',
        pointerEvents: i === 0 ? 'auto' : 'none',
        transition: 'opacity 0.35s ease',
      });
    });

    // UI overlay
    this._ui = document.createElement('div');
    Object.assign(this._ui.style, {
      position: 'fixed',
      bottom: '20px',
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      zIndex: '9999',
      background: 'rgba(0,0,0,0.55)',
      backdropFilter: 'blur(8px)',
      border: '1px solid rgba(255,255,255,0.12)',
      borderRadius: '999px',
      padding: '10px 20px',
      userSelect: 'none',
    });

    const btn = (label, fn) => {
      const b = document.createElement('button');
      b.textContent = label;
      Object.assign(b.style, {
        background: 'none',
        border: 'none',
        color: '#fff',
        fontSize: '20px',
        cursor: 'pointer',
        padding: '0 6px',
        lineHeight: '1',
        opacity: '0.8',
      });
      b.addEventListener('mouseover', () => b.style.opacity = '1');
      b.addEventListener('mouseout', () => b.style.opacity = '0.8');
      b.addEventListener('click', fn);
      return b;
    };

    this._counter = document.createElement('span');
    Object.assign(this._counter.style, {
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: '13px',
      color: 'rgba(255,255,255,0.7)',
      letterSpacing: '0.15em',
      minWidth: '60px',
      textAlign: 'center',
    });

    this._ui.appendChild(btn('←', () => this.go(this._idx - 1)));
    this._ui.appendChild(this._counter);
    this._ui.appendChild(btn('→', () => this.go(this._idx + 1)));

    // Fullscreen button
    const fs = btn('⛶', () => {
      if (!document.fullscreenElement) document.documentElement.requestFullscreen();
      else document.exitFullscreen();
    });
    fs.style.marginLeft = '8px';
    fs.style.opacity = '0.5';
    this._ui.appendChild(fs);

    document.body.appendChild(this._ui);

    // Keyboard
    document.addEventListener('keydown', e => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') { e.preventDefault(); this.go(this._idx + 1); }
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') { e.preventDefault(); this.go(this._idx - 1); }
      if (e.key === 'f' || e.key === 'F') {
        if (!document.fullscreenElement) document.documentElement.requestFullscreen();
        else document.exitFullscreen();
      }
    });

    // Click to advance (but not on buttons)
    this._scaler.addEventListener('click', e => {
      if (e.target.closest('a,button')) return;
      const rect = this._scaler.getBoundingClientRect();
      const scale = rect.width / this._w;
      const x = (e.clientX - rect.left) / scale;
      if (x > this._w / 2) this.go(this._idx + 1);
      else this.go(this._idx - 1);
    });

    // Touch swipe
    let tx = 0;
    this._scaler.addEventListener('touchstart', e => { tx = e.touches[0].clientX; }, { passive: true });
    this._scaler.addEventListener('touchend', e => {
      const dx = e.changedTouches[0].clientX - tx;
      if (Math.abs(dx) > 40) dx < 0 ? this.go(this._idx + 1) : this.go(this._idx - 1);
    }, { passive: true });

    this._resize();
    window.addEventListener('resize', () => this._resize());
    this._update();
  }

  _resize() {
    const vw = window.innerWidth, vh = window.innerHeight;
    const scale = Math.min(vw / this._w, vh / this._h);
    const left = (vw - this._w * scale) / 2;
    const top = (vh - this._h * scale) / 2;
    this._scaler.style.transform = `translate(${left}px, ${top}px) scale(${scale})`;
  }

  go(i) {
    const n = this._slides.length;
    i = Math.max(0, Math.min(n - 1, i));
    if (i === this._idx) return;
    const prev = this._slides[this._idx];
    const next = this._slides[i];
    prev.style.opacity = '0';
    prev.style.pointerEvents = 'none';
    next.style.opacity = '1';
    next.style.pointerEvents = 'auto';
    this._idx = i;
    this._update();
  }

  _update() {
    this._counter.textContent = `${this._idx + 1} / ${this._slides.length}`;
  }
}

customElements.define('deck-stage', DeckStage);
