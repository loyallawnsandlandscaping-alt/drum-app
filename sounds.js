// sounds.js
// Filenames match your /public folder (not in subfolders).
// If you add more WAVs later, just append to these arrays.

export const freeSounds = [
  { name: "Ride Bell 14 V01", file: "/14-CrshBELL-V01-SABIAN-14.wav" },
  { name: "Ride 18 V01",      file: "/18-Ride-V01-SABIAN-18.wav" },
  { name: "Crash 14 V01",     file: "/14-Crash-V01-SABIAN-14.wav" },
  { name: "Splash 10 V01",    file: "/10-Splash-V01-SABIAN-10.wav" },
  { name: "China 18 V01",     file: "/18-China-V01-SABIAN-18.wav" },
  { name: "Floor Tom 16 V01", file: "/16-FloorTom-V01-SABIAN-16.wav" }
];

// Extra sounds you already have (from the same screenshots).
export const proSounds = [
  { name: "Crash 14 V02", file: "/14-Crash-V02-SABIAN-14.wav" },
  { name: "Crash 14 V03", file: "/14-Crash-V03-SABIAN-14.wav" },
  { name: "Crash 14 V04", file: "/14-Crash-V04-SABIAN-14.wav" },
  { name: "Crash 14 V05", file: "/14-Crash-V05-SABIAN-14.wav" },

  // If you’ve got these in /public (common in the Harvey pack), keep them.
  // If a file 404s, just delete that line or add the ones you do have.
  { name: "Crash 18 V01", file: "/18-Crash-V01-SABIAN-18.wav" },
  { name: "Crash 18 V02", file: "/18-Crash-V02-SABIAN-18.wav" },
  { name: "Crash 18 V03", file: "/18-Crash-V03-SABIAN-18.wav" },
  { name: "Crash 18 V04", file: "/18-Crash-V04-SABIAN-18.wav" },
  { name: "Crash 18 V05", file: "/18-Crash-V05-SABIAN-18.wav" },
  { name: "Crash 18 V06", file: "/18-Crash-V06-SABIAN-18.wav" },
  { name: "Crash 18 V07", file: "/18-Crash-V07-SABIAN-18.wav" },
  { name: "Crash 18 V08", file: "/18-Crash-V08-SABIAN-18.wav" },
  { name: "Crash 18 V09", file: "/18-Crash-V09-SABIAN-18.wav" },
  { name: "Crash 18 V10", file: "/18-Crash-V10-SABIAN-18.wav" }
];

// Helper: find a sound by its display name (case-insensitive)
export function getSoundByName(name) {
  const all = [...freeSounds, ...proSounds];
  return all.find(s => s.name.toLowerCase() === name.toLowerCase()) || null;
}

// Helper: get a flat list of all file paths (useful for preloading)
export function getAllSoundFiles() {
  return [...freeSounds, ...proSounds].map(s => s.file);
}

