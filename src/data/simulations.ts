export interface Simulation {
  id: number;
  title: string;
  description: string;
  iframeUrl: string;
  question: string;
  answer: string;
  hint: string;
  unit?: string;
  solution: string[];
}

export const simulations: Simulation[] = [
  {
    id: 1,
    title: "Projectile Motion",
    description: "Explore the motion of projectiles and understand velocity, angle, and range.",
    iframeUrl: "https://phet.colorado.edu/sims/html/projectile-motion/latest/projectile-motion_en.html",
    question: "Fire a projectile at 45° angle with initial speed of 18 m/s. What is the approximate range (horizontal distance) in meters?",
    answer: "33",
    hint: "Use the simulation to fire at 45° with 18 m/s initial speed and measure the range.",
    unit: "m",
    solution: [
      "Click on the cannon to select it",
      "Set the angle to 45° using the angle slider",
      "Set the initial speed to 18 m/s using the speed slider",
      "Click the red 'Fire' button to launch the projectile",
      "Observe the trajectory and look at the tape measure or the range value displayed",
      "The range should be approximately 33 meters"
    ]
  },
  {
    id: 2,
    title: "Energy Skate Park",
    description: "Learn about conservation of energy with a skateboarder on different tracks.",
    iframeUrl: "https://phet.colorado.edu/sims/html/energy-skate-park/latest/energy-skate-park_en.html",
    question: "Starting from 5m height, what is the approximate speed at the bottom (ground level) in m/s? (Use g=10 m/s²)",
    answer: "10",
    hint: "Drop the skater from 5m and observe the speed at the bottom. Remember: PE = KE, so mgh = ½mv²",
    unit: "m/s",
    solution: [
      "Select the 'Introduction' screen if not already selected",
      "Drag the skater to the starting position at 5m height on the track",
      "Check that the 'Speed' display is visible at the bottom",
      "Release the skater and let them roll down",
      "Watch the speed meter when the skater reaches ground level (0m height)",
      "The speed should read approximately 10 m/s",
      "Physics: mgh = ½mv², so v = √(2gh) = √(2×10×5) = √100 = 10 m/s"
    ]
  },
  {
    id: 3,
    title: "Pendulum Lab",
    description: "Investigate the variables that affect the period of a pendulum.",
    iframeUrl: "https://phet.colorado.edu/sims/html/pendulum-lab/latest/pendulum-lab_en.html",
    question: "Set the pendulum length to 1.0 m. What is the approximate period in seconds? (Round to 1 decimal)",
    answer: "2.0",
    hint: "Set length to 1m and measure the time for one complete swing.",
    unit: "s",
    solution: [
      "Look for the 'Length' slider on the left side",
      "Drag the slider or input 1.0 into the length field to set it to 1.0 m",
      "Pull the pendulum bob to one side to start it swinging",
      "Use the stopwatch or timer feature to measure one complete period",
      "Alternatively, look at the period display which should show ~2.0 seconds",
      "Physics: T = 2π√(L/g) = 2π√(1/10) ≈ 2.0 s"
    ]
  },
  {
    id: 4,
    title: "Forces and Motion",
    description: "Push objects around and discover how forces affect motion.",
    iframeUrl: "https://phet.colorado.edu/sims/html/forces-and-motion-basics/latest/forces-and-motion-basics_en.html",
    question: "Apply a 500N force to a 100kg crate. What is the approximate acceleration in m/s²?",
    answer: "5",
    hint: "Use F = ma. Apply 500N force and observe the resulting acceleration.",
    unit: "m/s²",
    solution: [
      "Select the 'Motion' or 'Acceleration' tab at the top",
      "Look for the 100kg crate (or use the mass slider to set it to 100kg)",
      "Click and hold on the person/pusher to apply force",
      "Adjust the applied force to 500N using the slider or display",
      "Watch the acceleration meter - it should show approximately 5 m/s²",
      "Physics: F = ma, so a = F/m = 500N/100kg = 5 m/s²"
    ]
  },
  {
    id: 5,
    title: "Wave on a String",
    description: "Explore wave properties by adjusting frequency, amplitude, and tension.",
    iframeUrl: "https://phet.colorado.edu/sims/html/wave-on-a-string/latest/wave-on-a-string_en.html",
    question: "Set frequency to 1.5 Hz with high tension. Approximately how many wavelengths fit on the string?",
    answer: "3",
    hint: "Adjust the frequency to 1.5 Hz and count the complete waves visible.",
    unit: "wavelengths",
    solution: [
      "Select 'Oscillate' mode at the top",
      "Find the 'Frequency' slider and set it to 1.5 Hz",
      "Set the 'Tension' slider to High",
      "Set 'Damping' to None for clearer waves",
      "Start the oscillation by clicking the play button",
      "Count the complete wave cycles from left to right - you should see approximately 3 full wavelengths"
    ]
  }
];
