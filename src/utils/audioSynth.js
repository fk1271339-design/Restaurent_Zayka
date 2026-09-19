// Web Audio API synth for ambient Royal Kashmir atmosphere (warm drone + soft chime + crackle)
class RoyalAudioSynth {
  constructor() {
    this.audioCtx = null;
    this.isPlaying = false;
    this.masterGain = null;
    this.oscillators = [];
    this.chimeInterval = null;
  }

  init() {
    if (this.audioCtx) return;
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    this.audioCtx = new AudioContext();

    this.masterGain = this.audioCtx.createGain();
    this.masterGain.gain.setValueAtTime(0.15, this.audioCtx.currentTime);
    this.masterGain.connect(this.audioCtx.destination);
  }

  toggle() {
    if (!this.audioCtx) {
      this.init();
    }

    if (this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }

    if (this.isPlaying) {
      this.stop();
    } else {
      this.start();
    }
    return this.isPlaying;
  }

  start() {
    if (!this.audioCtx) return;
    this.isPlaying = true;

    // Warm deep drone notes (D Root - Kashmiri Santoor scale base: D2, A2, D3)
    const freqs = [73.42, 110.00, 146.83, 220.00];
    
    freqs.forEach((freq, idx) => {
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      
      osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(freq, this.audioCtx.currentTime);
      
      // Gentle LFO for warm organic swell
      const lfo = this.audioCtx.createOscillator();
      const lfoGain = this.audioCtx.createGain();
      lfo.frequency.value = 0.15 + idx * 0.05;
      lfoGain.gain.value = 0.04;
      lfo.connect(gain.gain);
      lfo.start();

      gain.gain.setValueAtTime(0.05, this.audioCtx.currentTime);
      
      osc.connect(gain);
      gain.connect(this.masterGain);
      osc.start();
      
      this.oscillators.push({ osc, gain, lfo });
    });

    // Occasional gentle chime sound
    this.chimeInterval = setInterval(() => {
      if (this.isPlaying) this.playChime();
    }, 6000);
  }

  playChime() {
    if (!this.audioCtx || !this.isPlaying) return;
    const notes = [587.33, 659.25, 739.99, 880.00, 987.77]; // D minor pentatonic high chimes
    const note = notes[Math.floor(Math.random() * notes.length)];

    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(note, this.audioCtx.currentTime);

    gain.gain.setValueAtTime(0, this.audioCtx.currentTime);
    gain.gain.linearRampToValueAtTime(0.08, this.audioCtx.currentTime + 0.1);
    gain.gain.exponentialRampToValueAtTime(0.0001, this.audioCtx.currentTime + 4.0);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start();
    osc.stop(this.audioCtx.currentTime + 4.1);
  }

  stop() {
    this.isPlaying = false;
    if (this.chimeInterval) clearInterval(this.chimeInterval);
    
    this.oscillators.forEach(({ osc, lfo }) => {
      try {
        osc.stop();
        if (lfo) lfo.stop();
      } catch (e) {
        // ignore
      }
    });
    this.oscillators = [];
  }
}

export const royalSynth = new RoyalAudioSynth();
