// sounds.js
// Organized drum sample list from Greg Harvey repo
// Split into Free vs Pro tiers

export const freeSounds = [
  { name: "Kick", file: "Kick/Kick 1.wav" },
  { name: "Snare", file: "Snare/Snare 1.wav" },
  { name: "HiHat Closed", file: "HiHat/Hihat Closed 1.wav" },
  { name: "HiHat Open", file: "HiHat/Hihat Open 1.wav" },
  { name: "Tom High", file: "Toms/Tom High 1.wav" },
  { name: "Tom Mid", file: "Toms/Tom Mid 1.wav" }
];

export const proSounds = [
  { name: "Tom Low", file: "Toms/Tom Low 1.wav" },
  { name: "Rimshot", file: "Snare/Snare Rim 1.wav" },
  { name: "Cross-stick", file: "Snare/Snare XStick 1.wav" },
  { name: "HiHat Pedal", file: "HiHat/Hihat Pedal 1.wav" },
  { name: "Ride Bow", file: "Cymbals/Ride 1.wav" },
  { name: "Ride Bell", file: "Cymbals/Ride Bell 1.wav" },
  { name: "Crash 1", file: "Cymbals/Crash 1.wav" },
  { name: "Crash 2", file: "Cymbals/Crash 2.wav" },
  { name: "Splash", file: "Cymbals/Splash 1.wav" },
  { name: "China", file: "Cymbals/China 1.wav" },
  { name: "Clap", file: "Percussion/Clap 1.wav" },
  { name: "Cowbell", file: "Percussion/Cowbell 1.wav" },
  { name: "Tambourine", file: "Percussion/Tambourine 1.wav" },
  { name: "Shaker", file: "Percussion/Shaker 1.wav" }
];

// helper function
export function getSoundByName(name) {
  const all = [...freeSounds, ...proSounds];
  return all.find(s => s.name.toLowerCase() === name.toLowerCase());
}
