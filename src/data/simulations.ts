export interface Simulation {
  id: number;
  title: string;
  description: string;
  iframeUrl: string;
  question: string;
  answer: string;
  hint: string;
  unit?: string;
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
    unit: "m"
  },
  {
    id: 2,
    title: "Energy Skate Park",
    description: "Learn about conservation of energy with a skateboarder on different tracks.",
    iframeUrl: "https://phet.colorado.edu/sims/html/energy-skate-park/latest/energy-skate-park_en.html",
    question: "Starting from 5m height, what is the approximate speed at the bottom (ground level) in m/s? (Use g=10 m/s²)",
    answer: "10",
    hint: "Drop the skater from 5m and observe the speed at the bottom. Remember: PE = KE, so mgh = ½mv²",
    unit: "m/s"
  },
  {
    id: 3,
    title: "Pendulum Lab",
    description: "Investigate the variables that affect the period of a pendulum.",
    iframeUrl: "https://phet.colorado.edu/sims/html/pendulum-lab/latest/pendulum-lab_en.html",
    question: "Set the pendulum length to 1.0 m. What is the approximate period in seconds? (Round to 1 decimal)",
    answer: "2.0",
    hint: "Set length to 1m and measure the time for one complete swing.",
    unit: "s"
  },
  {
    id: 4,
    title: "Forces and Motion",
    description: "Push objects around and discover how forces affect motion.",
    iframeUrl: "https://phet.colorado.edu/sims/html/forces-and-motion-basics/latest/forces-and-motion-basics_en.html",
    question: "Apply a 500N force to a 100kg crate. What is the approximate acceleration in m/s²?",
    answer: "5",
    hint: "Use F = ma. Apply 500N force and observe the resulting acceleration.",
    unit: "m/s²"
  },
  {
    id: 5,
    title: "Wave on a String",
    description: "Explore wave properties by adjusting frequency, amplitude, and tension.",
    iframeUrl: "https://phet.colorado.edu/sims/html/wave-on-a-string/latest/wave-on-a-string_en.html",
    question: "Set frequency to 1.5 Hz with high tension. Approximately how many wavelengths fit on the string?",
    answer: "3",
    hint: "Adjust the frequency to 1.5 Hz and count the complete waves visible.",
    unit: "wavelengths"
  }
];
