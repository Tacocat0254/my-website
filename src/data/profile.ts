// Keep the portfolio aligned with public/resume.pdf.
export const skillGroups = [
  { title: 'Languages', items: ['C/C++', 'Python', 'Go', 'Java', 'JavaScript/TypeScript', 'Verilog', 'x86 & ARM Assembly', 'OCaml'] },
  { title: 'Technologies', items: ['Git', 'Docker', 'Linux', 'NumPy & SciPy', 'Pandas', 'Matplotlib', 'PyTorch'] },
  { title: 'Computer Science Coursework', items: ['Programming Languages', 'Artificial Intelligence', 'Algorithms', 'Machine Learning', 'Operating Systems', 'Computer Architecture', 'Compilers', 'Computer Vision'] },
  { title: 'Mathematics Coursework', items: ['Probability', 'Stochastic Processes', 'Number Theory'] },
];

export const experience = [
  {
    title: 'Quantitative Developer Intern', company: 'Base Power Company', dates: 'May 2026 – August 2026', location: 'Austin, TX',
    bullets: [
      'Developed an optimization-based battery dispatch algorithm under ERCOT market and operational constraints, improving expected profitability by approximately $2/kWh.',
      'Built simulation and cross-validation infrastructure for battery dispatch strategies across historical ERCOT market conditions, reducing backtest error by 15%.',
      'Designed statistical experiments to quantify strategy performance, analyze sensitivity to market conditions, and guide optimization decisions.',
    ],
  },
  {
    title: 'Undergraduate Course Assistant', company: 'The University of Texas at Austin', dates: 'August 2026 – Present', location: 'Austin, TX',
    bullets: [
      'Mentor students in Software Engineering and Freshman Think Lab on software architecture, debugging, testing, version control, and project development.',
      'Lead office hours and conduct code and design reviews, providing individualized technical feedback on implementation and software engineering practices.',
    ],
  },
  {
    title: 'Simulation and Validation System Lead', company: 'Longhorn Racing Internal Combustion', dates: 'August 2024 – Present', location: 'Austin, TX',
    bullets: [
      'Lead a team of 7 engineers responsible for simulation, telemetry, and validation infrastructure for a Formula SAE race car, setting technical priorities and coordinating integration across vehicle systems.',
      'Direct simulation and track-validation efforts across vehicle dynamics, testing, driver development, and race strategy to support engineering design decisions.',
      'Coordinate validation plans with subsystem leads to translate vehicle data and simulation results into model calibration and design recommendations.',
    ],
  },
  {
    title: 'Software Engineering Intern', company: 'Lockheed Martin Aeronautics', dates: 'September 2023 – May 2024', location: 'Fort Worth, TX',
    bullets: ['Collaborated with the Air Force Research Laboratory, L3Harris, and Raytheon on research supporting satellite communications capabilities for the F-35 platform.'],
  },
];

export const projects: { title: string; technologies: string; bullets: string[]; href?: string }[] = [
  {
    title: 'Longhorn Racing Lap-Time Simulation', technologies: 'Python · MATLAB',
    bullets: [
      'Developed a quasi-steady-state lap-time simulator modeling aerodynamic, vehicle dynamics, and powertrain constraints to predict Formula SAE vehicle performance across race tracks.',
      'Integrated GGV performance envelopes with track trajectories and configurable vehicle models to compute feasible velocity profiles and predicted lap times.',
      'Implemented parameter sweeps to quantify lap-time sensitivity to vehicle design variables and compare engineering configurations.',
    ],
  },
  {
    title: 'JPEB: Custom 16-Bit Computer', technologies: 'Rust · Haskell · C · Verilog · Python · Assembly', href: 'https://github.com/PaulBailey-1/JPEB',
    bullets: [
      'Designed and implemented a custom 16-bit computer in a team of four, spanning ISA design, processor architecture, compiler tooling, and emulation.',
      'Developed a 6-stage pipelined processor in Verilog and deployed it to an FPGA, implementing hazard detection, data forwarding, pipeline stalls, and control-flow flushing.',
      'Extended the compiler and assembler toolchain and implemented Chrome Dinosaur and Snake using the custom ISA to validate end-to-end hardware and software execution.',
    ],
  },
  {
    title: 'x86 Multicore Operating System Kernel', technologies: 'C++',
    bullets: [
      'Built a preemptive multicore x86 operating system kernel supporting concurrent process and thread execution with synchronization primitives.',
      'Implemented virtual memory with demand paging, page caching, swapping, and memory-mapped files.',
      'Developed kernel-level process, thread, file-system, and memory-management system calls.',
    ],
  },
];
