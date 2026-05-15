import Container from "../../Context/Container";
import FooterHome from "./FooterHome";
import HomeBanner from "./HomeBanner";
import HomeCore from "./HomeCore";

const HomePage = () => {
  return (
    <Container className="w-full relative  py-12">
      {/* Hero Section */}
      <HomeBanner />
      {/* Hero Section */}
      <HomeCore />
      {/* Footer Section */}
      <FooterHome />
    </Container>
  );
};

export default HomePage;

// export const Home1 = () => {
//   useEffect(() => {
//     Aos.init({
//       once: true,
//       duration: 600,
//       easing: "ease-in-out",
//       delay: 2,
//     });
//   }, []);
//   return (
//     <Container className="w-full relative mx-auto py-12">
//       {/* Hero Section */}

//       <HomeBanner />

//       {/* Hero Section */}
//       <HomeCore />
//     </Container>
//   );
// };

// export const Home = () => {
//   return (
//     <Container className="min-h-screen pt-20">
//       {/* Hero Section */}
//       <section className=" mx-auto px-6 py-20 flex flex-col lg:flex-row items-center gap-16">
//         <div className="flex-1 space-y-8">
//           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-portfolio-primary/10 border border-portfolio-primary/20 text-portfolio-primary text-xs font-bold tracking-wider">
//             <span className="w-2 h-2 rounded-full bg-portfolio-primary animate-pulse" />
//             AVAILABLE FOR NEW PROJECTS
//           </div>

//           <h1 className="text-6xl md:text-8xl font-bold text-portfolio-heading leading-[1.1]">
//             Frontend{" "}
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-portfolio-primary to-cyan-400">
//               Developer
//             </span>
//             <br />{" "}
//             {/* <span className="text-portfolio-body/90">
//               Crafting Responsive & Interactive Web Experiences
//             </span> */}
//           </h1>

//           <p className="text-lg md:text-xl text-portfolio-body max-w-2xl leading-relaxed">
//             I build modern, high-performance web applications with a focus on
//             user experience and interactive design. Specializing in React,
//             Tailwind, and cutting-edge frontend architecture.
//           </p>

//           <div className="flex flex-wrap gap-4">
//             <button className="bg-portfolio-primary text-slate-900 px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform">
//               View Projects
//             </button>
//             <button className="bg-transparent border border-portfolio-border text-portfolio-heading px-8 py-4 rounded-xl font-bold hover:bg-portfolio-card transition">
//               Contact Me
//             </button>
//           </div>

//           <div className="flex gap-16 pt-10 border-t border-portfolio-border/50">
//             <div>
//               <p className="text-4xl font-bold text-portfolio-heading">50+</p>
//               <p className="text-xs uppercase tracking-widest text-portfolio-body">
//                 Projects
//               </p>
//             </div>
//             <div>
//               <p className="text-4xl font-bold text-portfolio-heading">5+</p>
//               <p className="text-xs uppercase tracking-widest text-portfolio-body">
//                 Years Exp.
//               </p>
//             </div>
//             <div>
//               <p className="text-4xl font-bold text-portfolio-heading">100%</p>
//               <p className="text-xs uppercase tracking-widest text-portfolio-body">
//                 Success Rate
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Code Visual Mockup */}
//         <div className="flex-1 w-full relative">
//           <div className="absolute -inset-1 bg-gradient-to-r from-portfolio-primary to-purple-600 rounded-2xl blur opacity-20"></div>
//           <div className="relative bg-[#0D1629] border border-portfolio-border p-2 rounded-2xl shadow-2xl">
//             <img
//               src={assets.hero}
//               alt="Dark Code Editor"
//               loading="lazy"
//               className="rounded-xl opacity-80"
//             />
//           </div>
//         </div>
//       </section>

//       {/* Core Expertise Grid */}
//       <section className="w-full mx-auto px-6 py-32 border-t border-portfolio-border/30">
//         <div className="mb-16">
//           <div className="flex items-center gap-2 text-portfolio-primary mb-2">
//             <span>✦</span>
//             <h2 className="text-2xl font-bold tracking-tight text-portfolio-heading">
//               Core Expertise
//             </h2>
//           </div>
//           <p className="text-portfolio-body">
//             Focused on building scalable products that combine technical
//             excellence with delightful user interfaces.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {expertiseData.map((item, i) => (
//             <div
//               key={i}
//               className="group p-10 bg-portfolio-card/50 border border-portfolio-border rounded-3xl hover:bg-portfolio-card transition-all duration-300"
//             >
//               <div className="w-12 h-12 rounded-2xl bg-portfolio-primary/10 flex items-center justify-center text-portfolio-primary mb-8 group-hover:scale-110 transition-transform">
//                 {item.icon}
//               </div>
//               <h3 className="text-xl font-bold text-portfolio-heading mb-4">
//                 {item.title}
//               </h3>
//               <p className="text-portfolio-body leading-relaxed text-sm">
//                 {item.desc}
//               </p>
//             </div>
//           ))}
//         </div>
//       </section>
//     </Container>
//   );
// };

// const expertiseData = [
//   {
//     title: "Responsive Design",
//     icon: "📱",
//     desc: "Fluid layouts that maintain pixel-perfection across all device sizes, from mobile to ultra-wide displays.",
//   },
//   {
//     title: "Interactive UI",
//     icon: "🌐",
//     desc: "Engaging animations and micro-interactions that guide users and bring static designs to life.",
//   },
//   {
//     title: "Performance",
//     icon: "⚡",
//     desc: "Optimizing every byte for lightning-fast load times and smooth 60fps scrolling experiences.",
//   },
// ];

// <section className="flex relative flex-col lg:flex-row items-center justify-between gap-12 pt-20">
//         <div data-aos="slide-right" className="lg:w-1/2 z-2 space-y-6">
//           <div className="flex items-center gap-2 text-portfolio-primary font-semibold text-sm">
//             <span className="w-2 h-2 rounded-full bg-portfolio-primary animate-pulse" />
//             AVAILABLE FOR NEW PROJECTS
//           </div>

//           <h1
//             data-aos="zoom-in"
//             data-aos-duration="1000"
//             className="text-5xl md:text-7xl font-bold text-portfolio-heading leading-tight"
//           >
//             Frontend <span className="text-portfolio-primary">Developer</span>{" "}
//             <br />
//             Crafting Experiences
//           </h1>

//           <p
//             data-aos="slide-up"
//             data-aos-duration="1200"
//             className="text-lg md:text-xl text-portfolio-body max-w-lg"
//           >
//             I build modern, high-performance web applications with a focus on
//             user experience and interactive design.
//           </p>

//           <div className="flex gap-4 pt-4">
//             <Button title="View Projects" type="blue" />
//             <Button title="Contact me" type="ghost" />
//           </div>

//           <div
//             data-aos="fade-up-right"
//             className="flex gap-12 pt-8 border-t border-portfolio-border"
//           >
//             <div>
//               <h3 className="text-3xl font-bold text-portfolio-heading">50+</h3>
//               <p>PROJECTS</p>
//             </div>
//             <div>
//               <h3 className="text-3xl font-bold text-portfolio-heading">5+</h3>
//               <p>YEARS EXP.</p>
//             </div>
//             <div>
//               <h3 className="text-3xl font-bold text-portfolio-heading">
//                 100%
//               </h3>
//               <p>SUCCESS</p>
//             </div>
//           </div>
//         </div>

//         <div data-aos="slide-left" className="lg:w-1/2 z-2 w-full">
//           <div className="bg-portfolio-card border border-portfolio-border p-2 rounded-2xl shadow-2xl overflow-hidden">
//             <img
//               src={assets.hero1}
//               alt="Code Mockup"
//               className="rounded-xl w-full"
//             />
//           </div>
//         </div>
//       </section>
