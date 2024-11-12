document.addEventListener('click', (e) => {
    const modalId = e.target.getAttribute('data-modal-toggle');
    const modal = modalId ? document.getElementById(modalId) : null;
    const modalBackdrop = document.querySelector('[modal-backdrop]');

    // เปิด Modal และ Overlay และล็อคพื้นหลัง
    if (modal && modalBackdrop) {
        modal.classList.remove('hidden');
        modalBackdrop.classList.remove('hidden');
        document.body.classList.add('overflow-hidden');  // ล็อคพื้นหลัง
    }

    // ซ่อน Modal, Overlay และปลดล็อคพื้นหลัง
    if (e.target.hasAttribute('data-modal-hide')) {
        const closeModalId = e.target.getAttribute('data-modal-hide');
        const closeModal = document.getElementById(closeModalId);
        
        if (closeModal && modalBackdrop) {
            closeModal.classList.add('hidden');
            modalBackdrop.classList.add('hidden');
            document.body.classList.remove('overflow-hidden');  // ปลดล็อคพื้นหลัง
        }
    }
});
//home
document.addEventListener('scroll', () => {
    const HomeSection = document.getElementById('HomeObjective');
    if (window.scrollY > 300) {  // adjust based on desired scroll trigger
        HomeSection.classList.remove('translate-y-full', 'opacity-0');
    HomeSection.classList.add('translate-y-0', 'opacity-100');
    }
});
    // เลื่อนแบบนุ่มนวลเมื่อกดลิงก์ home Objective
document.getElementById("home-link").addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("HomeObjective").scrollIntoView({ behavior: "smooth" });
});

document.addEventListener('scroll', () => {
    const homeSection = document.getElementById('HomeObjective');
    const homeLink = document.getElementById('home-link');
    const triggerHeight = homeSection.offsetTop - 100;  // ตำแหน่งที่จะเริ่มเปลี่ยนสี

    if (window.scrollY >= triggerHeight && window.scrollY < triggerHeight + homeSection.offsetHeight) {
        // เพิ่มคลาสที่ต้องการเมื่ออยู่ในส่วน Home
        homeLink.classList.add("block", "py-2", "px-3", "text-white", "bg-blue-700", "rounded", "md:bg-transparent", "md:text-blue-700", "md:p-0", "md:dark:text-blue-500");
        // ลบคลาสสีปกติ
        homeLink.classList.remove("text-gray-900", "hover:bg-gray-100", "dark:text-white", "dark:hover:bg-gray-700", "dark:hover:text-white", "md:dark:hover:bg-transparent", "dark:border-gray-700");
    } else {
        // ลบคลาสเมื่ออยู่นอกส่วน Home
        homeLink.classList.remove("block", "py-2", "px-3", "text-white", "bg-blue-700", "rounded", "md:bg-transparent", "md:text-blue-700", "md:p-0", "md:dark:text-blue-500");
        // คืนคลาสสีปกติ
        homeLink.classList.add("text-gray-900", "hover:bg-gray-100", "dark:text-white", "dark:hover:bg-gray-700", "dark:hover:text-white", "md:dark:hover:bg-transparent", "dark:border-gray-700");
    }
});
//edu
document.addEventListener('scroll', () => {
    const aboutSection = document.getElementById('EducationObjective');
    if (window.scrollY > 300) {  // adjust based on desired scroll trigger
    aboutSection.classList.remove('translate-y-full', 'opacity-0');
    aboutSection.classList.add('translate-y-0', 'opacity-100');
    }
});
    // เลื่อนแบบนุ่มนวลเมื่อกดลิงก์ Education Objective
document.getElementById("edu-link").addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("EducationObjective").scrollIntoView({ behavior: "smooth" });
});

document.addEventListener("scroll", () => {
    const aboutSection = document.getElementById("EducationObjective");
    const eduLink = document.getElementById("edu-link");
    const triggerHeight = aboutSection.offsetTop - 100; // ตำแหน่งที่จะเริ่มเปลี่ยนสี

    if (window.scrollY >= triggerHeight && window.scrollY < triggerHeight + aboutSection.offsetHeight) {
        // เพิ่มคลาสที่ต้องการเมื่ออยู่ในส่วน About
    eduLink.classList.add("block", "py-2", "px-3", "text-white", "bg-blue-700", "rounded", "md:bg-transparent", "md:text-blue-700", "md:p-0", "md:dark:text-blue-500");
        // ลบคลาสสีปกติ
    eduLink.classList.remove("text-gray-900", "hover:bg-gray-100", "dark:text-white", "dark:hover:bg-gray-700", "dark:hover:text-white", "md:dark:hover:bg-transparent", "dark:border-gray-700");
      } else {
        // ลบคลาสเมื่ออยู่นอกส่วน About
    eduLink.classList.remove("block", "py-2", "px-3", "text-white", "bg-blue-700", "rounded", "md:bg-transparent", "md:text-blue-700", "md:p-0", "md:dark:text-blue-500");
        // คืนคลาสสีปกติ
    eduLink.classList.add("text-gray-900", "hover:bg-gray-100", "dark:text-white", "dark:hover:bg-gray-700", "dark:hover:text-white", "md:dark:hover:bg-transparent", "dark:border-gray-700");
    }
});
document.addEventListener('DOMContentLoaded', function () {
  const sections = document.querySelectorAll('.scroll-section');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('scroll-in-view');
        } else {
          entry.target.classList.remove('scroll-in-view');
        }
      });
    },
    { threshold: 0.1 } // Adjust threshold as needed
  );

  sections.forEach((section) => observer.observe(section));
});

//pp
document.addEventListener('scroll', () => {
    const PersonalProfileSection = document.getElementById('PersonalProfileObjective');
    if (window.scrollY > 300) {  // adjust based on desired scroll trigger
    PersonalProfileSection.classList.remove('translate-y-full', 'opacity-0');
    PersonalProfileSection.classList.add('translate-y-0', 'opacity-100');
    }
});
    // เลื่อนแบบนุ่มนวลเมื่อกดลิงก์ Education Objective
document.getElementById("pp-link").addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("PersonalProfileObjective").scrollIntoView({ behavior: "smooth" });
});

document.addEventListener("scroll", () => {
    const PersonalProfileSection = document.getElementById("PersonalProfileObjective");
    const ppLink = document.getElementById("pp-link");
    const triggerHeight = PersonalProfileSection.offsetTop - 100; // ตำแหน่งที่จะเริ่มเปลี่ยนสี

    if (window.scrollY >= triggerHeight && window.scrollY < triggerHeight + PersonalProfileSection.offsetHeight) {
        // เพิ่มคลาสที่ต้องการเมื่ออยู่ในส่วน About
    ppLink.classList.add("block", "py-2", "px-3", "text-white", "bg-blue-700", "rounded", "md:bg-transparent", "md:text-blue-700", "md:p-0", "md:dark:text-blue-500");
        // ลบคลาสสีปกติ
    ppLink.classList.remove("text-gray-900", "hover:bg-gray-100", "dark:text-white", "dark:hover:bg-gray-700", "dark:hover:text-white", "md:dark:hover:bg-transparent", "dark:border-gray-700");
      } else {
        // ลบคลาสเมื่ออยู่นอกส่วน About
    ppLink.classList.remove("block", "py-2", "px-3", "text-white", "bg-blue-700", "rounded", "md:bg-transparent", "md:text-blue-700", "md:p-0", "md:dark:text-blue-500");
        // คืนคลาสสีปกติ
    ppLink.classList.add("text-gray-900", "hover:bg-gray-100", "dark:text-white", "dark:hover:bg-gray-700", "dark:hover:text-white", "md:dark:hover:bg-transparent", "dark:border-gray-700");
    }
});
//MyWork
document.addEventListener('scroll', () => {
    const MyWorkSection = document.getElementById('MyWorkObjective');
    if (window.scrollY > 300) {  // adjust based on desired scroll trigger
    MyWorkSection.classList.remove('translate-y-full', 'opacity-0');
    MyWorkSection.classList.add('translate-y-0', 'opacity-100');
    }
});
    // เลื่อนแบบนุ่มนวลเมื่อกดลิงก์ Education Objective
document.getElementById("my-link").addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("MyWorkObjective").scrollIntoView({ behavior: "smooth" });
});

document.addEventListener("scroll", () => {
    const MyWorkSection = document.getElementById("MyWorkObjective");
    const myLink = document.getElementById("my-link");
    const triggerHeight = MyWorkSection.offsetTop - 100; // ตำแหน่งที่จะเริ่มเปลี่ยนสี

    if (window.scrollY >= triggerHeight && window.scrollY < triggerHeight + MyWorkSection.offsetHeight) {
        // เพิ่มคลาสที่ต้องการเมื่ออยู่ในส่วน About
    myLink.classList.add("block", "py-2", "px-3", "text-white", "bg-blue-700", "rounded", "md:bg-transparent", "md:text-blue-700", "md:p-0", "md:dark:text-blue-500");
        // ลบคลาสสีปกติ
    myLink.classList.remove("text-gray-900", "hover:bg-gray-100", "dark:text-white", "dark:hover:bg-gray-700", "dark:hover:text-white", "md:dark:hover:bg-transparent", "dark:border-gray-700");
      } else {
        // ลบคลาสเมื่ออยู่นอกส่วน About
    myLink.classList.remove("block", "py-2", "px-3", "text-white", "bg-blue-700", "rounded", "md:bg-transparent", "md:text-blue-700", "md:p-0", "md:dark:text-blue-500");
        // คืนคลาสสีปกติ
    myLink.classList.add("text-gray-900", "hover:bg-gray-100", "dark:text-white", "dark:hover:bg-gray-700", "dark:hover:text-white", "md:dark:hover:bg-transparent", "dark:border-gray-700");
    }
});
//Cer
document.addEventListener('scroll', () => {
    const CerSection = document.getElementById('CerObjective');
    if (window.scrollY > 300) {  // adjust based on desired scroll trigger
    CerSection.classList.remove('translate-y-full', 'opacity-0');
    CerSection.classList.add('translate-y-0', 'opacity-100');
    }
});
    // เลื่อนแบบนุ่มนวลเมื่อกดลิงก์ Education Objective
document.getElementById("cer-link").addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("CerObjective").scrollIntoView({ behavior: "smooth" });
});

document.addEventListener("scroll", () => {
    const CerSection = document.getElementById("CerObjective");
    const cerLink = document.getElementById("cer-link");
    const triggerHeight = CerSection.offsetTop - 100; // ตำแหน่งที่จะเริ่มเปลี่ยนสี

    if (window.scrollY >= triggerHeight && window.scrollY < triggerHeight + CerSection.offsetHeight) {
        // เพิ่มคลาสที่ต้องการเมื่ออยู่ในส่วน About
    cerLink.classList.add("block", "py-2", "px-3", "text-white", "bg-blue-700", "rounded", "md:bg-transparent", "md:text-blue-700", "md:p-0", "md:dark:text-blue-500");
        // ลบคลาสสีปกติ
    cerLink.classList.remove("text-gray-900", "hover:bg-gray-100", "dark:text-white", "dark:hover:bg-gray-700", "dark:hover:text-white", "md:dark:hover:bg-transparent", "dark:border-gray-700");
      } else {
        // ลบคลาสเมื่ออยู่นอกส่วน About
    cerLink.classList.remove("block", "py-2", "px-3", "text-white", "bg-blue-700", "rounded", "md:bg-transparent", "md:text-blue-700", "md:p-0", "md:dark:text-blue-500");
        // คืนคลาสสีปกติ
    cerLink.classList.add("text-gray-900", "hover:bg-gray-100", "dark:text-white", "dark:hover:bg-gray-700", "dark:hover:text-white", "md:dark:hover:bg-transparent", "dark:border-gray-700");
    }
});

