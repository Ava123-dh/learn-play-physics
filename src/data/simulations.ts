export interface Question {
  id: number;
  question: string;
  answer: string;
  hint: string;
  unit?: string;
  solution: string[];
  points: number;
}

export interface Module {
  id: number;
  title: string;
  description: string;
  iframeUrl: string;
  icon: string;
  requiredPoints: number;
  questions: Question[];
}

export const modules: Module[] = [
  {
    id: 1,
    title: "Projectile Motion",
    description: "Explore the motion of projectiles and understand velocity, angle, and range.",
    iframeUrl: "https://phet.colorado.edu/sims/html/projectile-motion/latest/projectile-motion_en.html?screens=2",
    icon: "Rocket",
    requiredPoints: 0,
    questions: [
      {
        id: 1,
        question: "Fire a projectile at 45° angle with initial speed of 18 m/s. What is the approximate range (horizontal distance) in meters? (Assume air resistance is negligible and It is launched from 1m above the ground)",
        answer: "33",
        hint: "Use the simulation to fire at 45° with 18 m/s initial speed and measure the range.",
        unit: "m",
        points: 10,
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
        question: "Fire a projectile at 30° angle with initial speed of 20 m/s. What is the approximate maximum height in meters? (Assume air resistance is negligible and It is launched from 1m above the ground)",
        answer: "5",
        hint: "Set angle to 30° and speed to 20 m/s, then observe the peak height.",
        unit: "m",
        points: 10,
        solution: [
          "Select the cannon",
          "Set the angle to 30° using the angle slider",
          "Set the initial speed to 20 m/s",
          "Click 'Fire' to launch",
          "Watch the height indicator at the peak of the trajectory",
          "The maximum height should be approximately 5 meters"
        ]
      },
      {
        id: 3,
        question: "At what angle gives the maximum range for any given initial speed?",
        answer: "45",
        hint: "Try different angles and observe which gives the longest range.",
        unit: "degrees",
        points: 10,
        solution: [
          "Set a constant initial speed (e.g., 20 m/s)",
          "Try firing at different angles: 30°, 45°, 60°, etc.",
          "Observe the range for each angle",
          "You'll notice 45° gives the maximum range",
          "This is a fundamental principle of projectile motion"
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Energy Skate Park",
    description: "Learn about conservation of energy with a skateboarder on different tracks.",
    iframeUrl: "https://phet.colorado.edu/sims/html/energy-skate-park/latest/energy-skate-park_en.html?screens=1",
    icon: "Waves",
    requiredPoints: 20,
    questions: [
      {
        id: 1,
        question: "Starting from 5m height, what is the approximate speed at the bottom (ground level) in m/s? (Use g=10 m/s²), enable the speed display. Do not change friction and gravity settings.",
        answer: "10",
        hint: "Drop the skater from 5m and observe the speed at the bottom. Remember: PE = KE",
        unit: "m/s",
        points: 10,
        solution: [
          "Drag the skater to 5m height on the track",
          "Check that the 'Speed' display is visible",
          "Release the skater",
          "Watch the speed meter at ground level (0m height)",
          "Speed should be approximately 10 m/s",
          "Physics: v = √(2gh) = √(2×10×5) = 10 m/s"
        ]
      },
      {
        id: 2,
        question: "If the dog skater starts at 8m height, what is the K.E at 3m? Do not change friction and gravity settings. Round to nearest whole number.",
        answer: "2881 J",
        hint: "Use K.E formula: K.E = 0.5mv², find v at 3m using energy conservation.",
        unit: "J",
        points: 10,
        solution: [
          "Drag the skater to 8m height",
          "Release and watch as they pass through 3m height",
          "Note the speed at 3m from the speed display",
          "Calculate K.E using K.E = 0.5mv²",
          "Assuming mass m = 60kg (dog skater mass), and speed v at 3m is approximately 9.91 m/s",
          "K.E = 0.5 × 50 × (9.91)² ≈ 2881 J"
        ]
      },
      {
        id: 3,
        question: "What percentage of energy is kinetic at the halfway point of a drop?",
        answer: "50",
        hint: "At halfway, half the potential energy has converted to kinetic energy.",
        unit: "%",
        points: 10,
        solution: [
          "Start the skater at any height",
          "Observe the energy bars at the halfway point",
          "You'll see PE and KE bars are equal",
          "This means 50% is kinetic, 50% is potential",
          "Total energy is always conserved"
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Pendulum Lab",
    description: "Investigate the variables that affect the period of a pendulum.",
    iframeUrl: "https://phet.colorado.edu/sims/html/pendulum-lab/latest/pendulum-lab_en.html?screens=1",
    icon: "Clock",
    requiredPoints: 40,
    questions: [
      {
        id: 1,
        question: "Set the pendulum length to 1.0 m. What is the approximate period in seconds? (Round to 1 decimal). Do not change mass, friction or gravity settings.",
        answer: "2.0",
        hint: "Set length to 1m and measure the time for one complete swing.",
        unit: "s",
        points: 10,
        solution: [
          "Set the length slider to 1.0 m",
          "Pull the pendulum to one side",
          "Use the stopwatch or observe the period display",
          "Period should be approximately 2.0 seconds",
          "Physics: T = 2π√(L/g) ≈ 2.0 s"
        ]
      },
      {
        id: 2,
        question: "If you double the length to 2.0 m, what happens to the period? (Enter the new period)(Round to 1 decimal). Do not change mass, friction or gravity settings.",
        answer: "2.8",
        hint: "The period increases by √2 when length doubles.",
        unit: "s",
        points: 10,
        solution: [
          "Set length to 2.0 m",
          "Start the pendulum swinging",
          "Observe the period display",
          "Period = 2π√(2/10) ≈ 2.8 seconds",
          "Period increases by √2 ≈ 1.41 times"
        ]
      },
      {
        id: 3,
        question: "Does changing the mass affect the period? (Enter 1 for yes, 0 for no)",
        answer: "0",
        hint: "Try different masses and observe if the period changes.",
        unit: "",
        points: 10,
        solution: [
          "Set a specific length (e.g., 1.0 m)",
          "Note the period with the current mass",
          "Change the mass using the mass slider",
          "Observe that the period remains the same",
          "The period of a pendulum is independent of mass!"
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Forces and Motion",
    description: "Push objects around and discover how forces affect motion.",
    iframeUrl: "https://phet.colorado.edu/sims/html/forces-and-motion-basics/latest/forces-and-motion-basics_en.html?screens=2",
    icon: "Zap",
    requiredPoints: 60,
    questions: [
      {
        id: 1,
        question: "Apply a 500N force to a 100kg crate. What is the approximate acceleration in m/s²?",
        answer: "5",
        hint: "Use F = ma. Apply 500N force and observe the acceleration.",
        unit: "m/s²",
        points: 10,
        solution: [
          "Select the Motion or Acceleration screen",
          "Set the mass to 100kg",
          "Apply 500N force using the pusher",
          "Watch the acceleration meter",
          "Should show approximately 5 m/s²",
          "Physics: a = F/m = 500/100 = 5 m/s²"
        ]
      },
      {
        id: 2,
        question: " An applied force of 200N to the right is acting on a fridge, considering a friction force of 100N acting against the motion what is the acceleration of the fridge?",
        answer: "0.5",
        hint: "Net force = ma, so Applied force = ma + friction",
        unit: "m/s²",
        points: 10,
        solution: [
          "Set object to fridge",
          "Drag to apply 200N force to the right",
          "Note friction force of 100N acting left",
          "Calculate net force: 200N - 100N = 100N",
          "Calculate acceleration: a = F/m = 100/200 = 0.5 m/s²",
          "Observe acceleration meter to confirm"
        ]
      },
      {
        id: 3,
        question: "Find the mass of the mystery object if a force of 50N is applied",
        answer: "50",
        hint: "Use F = ma. Apply 300N force and observe the acceleration.",
        unit: "kg",
        points: 10,
        solution: [
          "Set mass to gift box (mystery object)",
          "Apply 50N force",
          "Observe acceleration meter (should be 1 m/s²)",
          "Calculate mass: m = F/a = 50/1 = 50 kg",
          "Confirm with observed acceleration"
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Wave on a String",
    description: "Explore wave properties by adjusting frequency, amplitude, and tension.",
    iframeUrl: "https://phet.colorado.edu/sims/html/wave-on-a-string/latest/wave-on-a-string_en.html?screens=1",
    icon: "Activity",
    requiredPoints: 80,
    questions: [
      {
        id: 1,
        question: "Set frequency to 1.5 Hz with high tension. Approximately how many wavelengths fit on the string?",
        answer: "3",
        hint: "Adjust the frequency to 1.5 Hz and count the complete waves visible.",
        unit: "wavelengths",
        points: 10,
        solution: [
          "Select 'Oscillate' mode",
          "Set Frequency to 1.5 Hz",
          "Set Tension to High",
          "Set Damping to None",
          "Start oscillation",
          "Count complete wave cycles: approximately 3"
        ]
      },
      {
        id: 2,
        question: "What happens to wavelength when you increase frequency? (Enter 1 for decreases, 0 for increases)",
        answer: "1",
        hint: "Try increasing frequency and observe the wavelength changes.",
        unit: "",
        points: 10,
        solution: [
          "Start with a low frequency (e.g., 1.0 Hz)",
          "Note the wavelength (distance between peaks)",
          "Increase frequency to 2.0 Hz",
          "Observe that wavelength decreases",
          "This shows inverse relationship: v = fλ"
        ]
      },
      {
        id: 3,
        question: "Does increasing tension increase or decrease wave speed? (Enter 1 for increases, 0 for decreases)",
        answer: "1",
        hint: "Change tension and observe how quickly waves travel.",
        unit: "",
        points: 10,
        solution: [
          "Set frequency to a constant value",
          "Start with low tension",
          "Observe wave speed",
          "Increase tension to high",
          "Wave speed increases with tension",
          "Higher tension = faster waves"
        ]
      }
    ]
  }
];
