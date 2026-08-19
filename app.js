document.addEventListener('DOMContentLoaded', () => {
  // Cloudinary Image URL Dynamic Prefix Resolver
  const getCloudinaryUrl = (localPath) => {
    if (!localPath) return "";
    if (localPath.startsWith("http")) return localPath;
    
    // Explicit mappings for uploaded Cloudinary images:
    if (localPath.includes("uds_alleppey_3.jpg")) {
      return "https://res.cloudinary.com/ltevzqit/image/upload/f_auto,q_auto/uds_alleppey_3_pqrxuw.jpg";
    }
    if (localPath.includes("founder.png")) {
      return "https://res.cloudinary.com/ltevzqit/image/upload/f_auto,q_auto/founder_xfuvif.jpg";
    }
    if (localPath.includes("blanket_days_2.jpg")) {
      return "https://res.cloudinary.com/ltevzqit/image/upload/f_auto,q_auto/blanket_days_2_rwa9ga.jpg";
    }
    if (localPath.includes("blanket_days_1.jpg")) {
      return "https://res.cloudinary.com/ltevzqit/image/upload/f_auto,q_auto/blanket_days_1_au1ybi.jpg";
    }
    if (localPath.includes("blanket_days_3.jpg")) {
      return "https://res.cloudinary.com/ltevzqit/image/upload/f_auto,q_auto/blanket_days_3_d6evn7.jpg";
    }
    if (localPath.includes("blanket_days_4.jpg")) {
      return "https://res.cloudinary.com/ltevzqit/image/upload/f_auto,q_auto/blanket_days_4_ytocek.jpg";
    }
    if (localPath.includes("blanket_days_5.jpg")) {
      return "https://res.cloudinary.com/ltevzqit/image/upload/f_auto,q_auto/blanket_days_5_a2f0yn.jpg";
    }
    if (localPath.includes("grand_cliff_5.jpg")) {
      return "https://res.cloudinary.com/ltevzqit/image/upload/f_auto,q_auto/grand_cliff_5_qvu8ac.jpg";
    }
    if (localPath.includes("grand_cliff_1.jpg")) {
      return "https://res.cloudinary.com/ltevzqit/image/upload/f_auto,q_auto/grand_cliff_1_djuj6m.jpg";
    }
    if (localPath.includes("grand_cliff_2.jpg")) {
      return "https://res.cloudinary.com/ltevzqit/image/upload/f_auto,q_auto/grand_cliff_2_b3xeqr.jpg";
    }
    if (localPath.includes("grand_cliff_3.jpg")) {
      return "https://res.cloudinary.com/ltevzqit/image/upload/f_auto,q_auto/grand_cliff_3_ddsoju.jpg";
    }
    if (localPath.includes("grand_cliff_4.jpg")) {
      return "https://res.cloudinary.com/ltevzqit/image/upload/f_auto,q_auto/grand_cliff_4_yts3vd.jpg";
    }
    if (localPath.includes("uds_alleppey_1.jpg")) {
      return "https://res.cloudinary.com/ltevzqit/image/upload/f_auto,q_auto/uds_alleppey_1_bhrmwi.jpg";
    }
    if (localPath.includes("uds_alleppey_2.jpg")) {
      return "https://res.cloudinary.com/ltevzqit/image/upload/f_auto,q_auto/uds_alleppey_2_rp3vsr.jpg";
    }
    if (localPath.includes("uds_alleppey_4.jpg")) {
      return "https://res.cloudinary.com/ltevzqit/image/upload/f_auto,q_auto/uds_alleppey_4_onmkuu.jpg";
    }
    if (localPath.includes("ramada_kochi_2.jpg")) {
      return "https://res.cloudinary.com/ltevzqit/image/upload/f_auto,q_auto/ramada_kochi_2_glcc9d.jpg";
    }
    if (localPath.includes("ramada_kochi_1.jpg")) {
      return "https://res.cloudinary.com/ltevzqit/image/upload/f_auto,q_auto/ramada_kochi_1_rqtczx.jpg";
    }
    if (localPath.includes("ramada_kochi_3.jpg")) {
      return "https://res.cloudinary.com/ltevzqit/image/upload/f_auto,q_auto/ramada_kochi_3_lorgg2.jpg";
    }
    if (localPath.includes("exp_spicetrails")) {
      return "https://res.cloudinary.com/ltevzqit/image/upload/f_auto,q_auto/exp_spicetrails_c2eqsx.jpg";
    }
    if (localPath.includes("exp_backwaters")) {
      return "https://res.cloudinary.com/ltevzqit/image/upload/f_auto,q_auto/exp_backwaters_ulreub.jpg";
    }
    if (localPath.includes("exp_kovalam")) {
      return "https://res.cloudinary.com/ltevzqit/image/upload/f_auto,q_auto/exp_kovalam_zhoxbx.jpg";
    }
    if (localPath.includes("exp_culture")) {
      return "https://res.cloudinary.com/ltevzqit/image/upload/f_auto,q_auto/exp_culture_xzvrsq.jpg";
    }
    if (localPath.includes("exp_ayurveda")) {
      return "https://res.cloudinary.com/ltevzqit/image/upload/f_auto,q_auto/exp_ayurveda_yjlgmg.jpg";
    }
    if (localPath.includes("exp_athirapally")) {
      return "https://res.cloudinary.com/ltevzqit/image/upload/f_auto,q_auto/exp_athirapally_pvfc1x.jpg";
    }

    // Default fallback to local assets folder
    return localPath;
  };

  // ==========================================
  // 1. Sticky Navigation & Scroll States
  // ==========================================
  const header = document.querySelector('.header');
  const scrollThreshold = 50;

  const handleScroll = () => {
    if (window.scrollY > scrollThreshold) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Initial call on page load

  // ==========================================
  // 2. Mobile Nav Drawer & Overlay Toggles
  // ==========================================
  const mobileToggle = document.getElementById('mobileMenuToggle');
  const mobileDrawer = document.getElementById('mobileNavDrawer');
  const mobileOverlay = document.getElementById('mobileNavOverlay');
  const navLinks = document.querySelectorAll('.nav-link, #mobileNavDrawer .btn');

  const toggleMobileNav = () => {
    mobileToggle.classList.toggle('open');
    mobileDrawer.classList.toggle('active');
    mobileOverlay.classList.toggle('active');
    
    const mobileFloatingCta = document.getElementById('mobileFloatingCta');
    if (mobileDrawer.classList.contains('active')) {
      document.body.style.overflow = 'hidden';
      if (mobileFloatingCta) mobileFloatingCta.classList.add('nav-drawer-open');
    } else {
      document.body.style.overflow = '';
      if (mobileFloatingCta) mobileFloatingCta.classList.remove('nav-drawer-open');
    }
  };

  if (mobileToggle && mobileOverlay) {
    mobileToggle.addEventListener('click', toggleMobileNav);
    mobileOverlay.addEventListener('click', toggleMobileNav);
  }

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (mobileDrawer && mobileDrawer.classList.contains('active')) {
        toggleMobileNav();
      }
    });
  });

  // ==========================================
  // 3. Smooth Scroll Anchor Offset Fix
  // ==========================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        
        const headerOffset = 90; // Standard offset for sticky nav bar space
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });

        if (targetId === '#enquire') {
          setTimeout(() => {
            const firstInput = document.getElementById('fullName');
            if (firstInput) firstInput.focus({ preventScroll: true });
          }, 450);
        }
      }
    });
  });



  // ==========================================
  // 5. FAQ Accordion Toggle
  // ==========================================
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question-btn');
    const answer = item.querySelector('.faq-answer');

    if (questionBtn && answer) {
      questionBtn.addEventListener('click', () => {
        const isOpen = item.classList.contains('active');
        
        faqItems.forEach(otherItem => {
          if (otherItem !== item && otherItem.classList.contains('active')) {
            otherItem.classList.remove('active');
            otherItem.querySelector('.faq-answer').style.maxHeight = '0px';
          }
        });

        if (isOpen) {
          item.classList.remove('active');
          answer.style.maxHeight = '0px';
        } else {
          item.classList.add('active');
          answer.style.maxHeight = answer.scrollHeight + 'px';
        }
      });
    }
  });

  // ==========================================
  // 6. Scroll-Driven Center-Viewport Fade-in Animations
  // ==========================================
  const animatedElements = document.querySelectorAll('.fade-in-section');

  const animationObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target); // Trigger once when near viewport center
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '-20% 0px -20% 0px' // Center trigger across all sections
  });

  animatedElements.forEach(el => {
    animationObserver.observe(el);
  });

  // ==========================================
  // 7. Inquiry Form Client Submission Handling
  // ==========================================
  const inquiryForm = document.getElementById('inquiryForm');
  const successOverlay = document.getElementById('formSuccessOverlay');
  const closeSuccessBtn = document.getElementById('closeSuccessBtn');

  if (inquiryForm) {
    inquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Form validation (Name and Phone)
      const nameInput = document.getElementById('fullName');
      const phoneInput = document.getElementById('phone');
      const name = nameInput?.value.trim() || '';
      const phone = phoneInput?.value.trim() || '';

      if (!name || !phone) {
        alert('Please fill out all required fields.');
        if (!name && nameInput) nameInput.focus();
        else if (!phone && phoneInput) phoneInput.focus();
        return;
      }

      // Validate phone number format (minimum 7 digits, maximum 18 characters including spaces, dashes, +, and brackets)
      const phoneRegex = /^\+?[0-9\s\-()]{7,18}$/;
      if (!phoneRegex.test(phone)) {
        alert('Please enter a valid phone number.');
        if (phoneInput) phoneInput.focus();
        return;
      }

      // Execute Zoho CRM mandatory validation check if available
      if (typeof window.checkMandatory1346784000000558077 === 'function') {
        const isValid = window.checkMandatory1346784000000558077();
        if (!isValid) return;
      }

      const formData = {
        name,
        phone
      };

      console.log('Converting Enquiry to Zoho CRM Lead (Qnest Holidays):', formData);

      // Submit form directly to Zoho CRM WebToLead endpoint via target hidden iframe
      HTMLFormElement.prototype.submit.call(inquiryForm);

      // Open Success Overlay popup
      if (successOverlay) {
        successOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
      }

      inquiryForm.reset();
    });
  }

  if (closeSuccessBtn) {
    closeSuccessBtn.addEventListener('click', () => {
      successOverlay.classList.remove('active');
      document.body.style.overflow = '';
    });
  }

  if (successOverlay) {
    successOverlay.addEventListener('click', (e) => {
      if (e.target === successOverlay) {
        successOverlay.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  // ==========================================
  // 8. Active Nav Link Scroll Spy
  // ==========================================
  const spySections = document.querySelectorAll('section[id]');
  const desktopLinks = document.querySelectorAll('.nav-menu .nav-link');

  const spyOptions = {
    root: null,
    rootMargin: '-40% 0px -55% 0px',
    threshold: 0
  };

  const spyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        desktopLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, spyOptions);

  spySections.forEach(section => {
    spyObserver.observe(section);
  });

  // ==========================================
  // 9. About Section mobile Cover Flow Slider (Safe fallback)
  // ==========================================
  const collageContainer = document.getElementById('aboutCollage');
  if (collageContainer) {
    const slides = collageContainer.children;
    
    const updateActiveSlide = () => {
      if (window.innerWidth > 992) {
        Array.from(slides).forEach(slide => {
          slide.classList.remove('active-slide');
        });
        return;
      }
      
      const containerCenter = collageContainer.scrollLeft + (collageContainer.offsetWidth / 2);
      
      let closestSlide = null;
      let minDistance = Infinity;
      
      Array.from(slides).forEach(slide => {
        const slideCenter = slide.offsetLeft + (slide.offsetWidth / 2);
        const distance = Math.abs(containerCenter - slideCenter);
        
        if (distance < minDistance) {
          minDistance = distance;
          closestSlide = slide;
        }
      });
      
      Array.from(slides).forEach(slide => {
        if (slide === closestSlide) {
          slide.classList.add('active-slide');
        } else {
          slide.classList.remove('active-slide');
        }
      });
    };
    
    collageContainer.addEventListener('scroll', () => {
      window.requestAnimationFrame(updateActiveSlide);
    });
    
    window.addEventListener('resize', updateActiveSlide);
    setTimeout(updateActiveSlide, 300);
  }

  // ==========================================
  // 10. Hotels Section Filter & Slider (11 Destinations Cover Flow)
  // ==========================================
  const hotelData = [
    { 
      id: 'thekkady', 
      title: "Greenwoods Resort Thekkady", 
      sub: "Thekkady", 
      rating: "★★★★★ Luxury Resort & Spa", 
      img: "https://res.cloudinary.com/ltevzqit/image/upload/v1787140473/unnamed_41_znm0ng.webp", 
      gallery: [
        { url: "assets/blanket_days_2.jpg", title: "Blanket Days Resort and Spa Thekkady" },
        { url: "assets/blanket_days_1.jpg", title: "Blanket Days Resort and Spa Thekkady" },
        { url: "assets/blanket_days_3.jpg", title: "Blanket Days Resort and Spa Thekkady" },
        { url: "assets/blanket_days_4.jpg", title: "Blanket Days Resort and Spa Thekkady" },
        { url: "assets/blanket_days_5.jpg", title: "Blanket Days Resort and Spa Thekkady" },
        "https://res.cloudinary.com/ltevzqit/image/upload/v1787140473/unnamed_41_znm0ng.webp",
        "https://res.cloudinary.com/ltevzqit/image/upload/v1787140474/unnamed_43_lg9qc6.webp",
        "https://res.cloudinary.com/ltevzqit/image/upload/v1787140474/unnamed_44_uowrle.webp",
        "https://res.cloudinary.com/ltevzqit/image/upload/v1787140473/unnamed_42_hmwikq.webp",
        "https://res.cloudinary.com/ltevzqit/image/upload/v1787140473/unnamed_38_zxwpfn.webp",
        "https://res.cloudinary.com/ltevzqit/image/upload/v1787140473/unnamed_40_rjarts.webp",
        "https://res.cloudinary.com/ltevzqit/image/upload/v1787140473/unnamed_39_avlx7y.webp",
        "https://res.cloudinary.com/ltevzqit/image/upload/v1787140472/unnamed_37_i1ykk5.webp",
        "https://res.cloudinary.com/ltevzqit/image/upload/v1787140472/unnamed_36_owcrd1.webp",
        "https://res.cloudinary.com/ltevzqit/image/upload/v1787140471/unnamed_34_gtmqo2.webp",
        "https://res.cloudinary.com/ltevzqit/image/upload/v1787140471/unnamed_35_q4eutn.webp",
        "https://res.cloudinary.com/ltevzqit/image/upload/v1787140471/unnamed_33_pw6ny0.webp",
        "https://res.cloudinary.com/ltevzqit/image/upload/v1787140471/unnamed_32_xnlhwv.webp",
        "https://res.cloudinary.com/ltevzqit/image/upload/v1787140471/unnamed_28_faayg2.webp",
        "https://res.cloudinary.com/ltevzqit/image/upload/v1787140470/unnamed_30_yhzkf3.webp",
        "https://res.cloudinary.com/ltevzqit/image/upload/v1787140470/unnamed_29_c13aq5.webp",
        "https://res.cloudinary.com/ltevzqit/image/upload/v1787140470/unnamed_31_dijxas.webp",
        "https://res.cloudinary.com/ltevzqit/image/upload/v1787140470/unnamed_27_xjx38o.webp",
        "https://res.cloudinary.com/ltevzqit/image/upload/v1787140470/unnamed_26_wilhtc.webp",
        "https://res.cloudinary.com/ltevzqit/image/upload/v1787140469/unnamed_20_pkw3hd.webp",
        "https://res.cloudinary.com/ltevzqit/image/upload/v1787140470/unnamed_22_sjqham.webp",
        "https://res.cloudinary.com/ltevzqit/image/upload/v1787140469/unnamed_24_gnyf2w.webp",
        "https://res.cloudinary.com/ltevzqit/image/upload/v1787140469/unnamed_25_zlvjkh.webp",
        "https://res.cloudinary.com/ltevzqit/image/upload/v1787140469/unnamed_21_cctmoc.webp"
      ] 
    },
    { id: 'munnar', title: "Grand Cliff Munnar", sub: "Munnar", rating: "★★★★★ Premium Hill Resort", img: "assets/grand_cliff_5.jpg", gallery: ["assets/grand_cliff_5.jpg", "assets/grand_cliff_1.jpg", "assets/grand_cliff_2.jpg", "assets/grand_cliff_3.jpg", "assets/grand_cliff_4.jpg"] },
    { id: 'alappuzha', title: "Uday Backwater Resort", sub: "Alappuzha", rating: "★★★★★ Luxury Backwater Resort", img: "https://res.cloudinary.com/ltevzqit/image/upload/v1785039903/Uday_Backwater_view_4_2_iitxkm.jpg", gallery: ["https://res.cloudinary.com/ltevzqit/image/upload/v1785039903/Uday_Backwater_view_4_2_iitxkm.jpg", "https://res.cloudinary.com/ltevzqit/image/upload/v1785039903/Uday_Backwater_view_5_1_vor5hr.jpg"] },
    { id: 'kovalam', title: "UDS Hotel & Resort", sub: "Kovalam", rating: "★★★★★ Luxury Beach Resort & Spa", img: "assets/uds_alleppey_1.jpg", gallery: ["assets/uds_alleppey_1.jpg", "assets/uds_alleppey_2.jpg", "assets/uds_alleppey_3.jpg", "assets/uds_alleppey_4.jpg"] },
    { 
      id: 'kochi', 
      title: "Kochi Marriott Hotel", 
      sub: "Kochi", 
      rating: "★★★★★ Luxury City Resort & Spa", 
      img: "https://res.cloudinary.com/ltevzqit/image/upload/v1787142007/unnamed_36_mjk3zl.webp", 
      gallery: [
        { url: "assets/ramada_kochi_2.jpg", title: "Ramada Resort by Wyndham" },
        { url: "assets/ramada_kochi_1.jpg", title: "Ramada Resort by Wyndham" },
        { url: "assets/ramada_kochi_3.jpg", title: "Ramada Resort by Wyndham" },
        { url: "https://res.cloudinary.com/ltevzqit/image/upload/v1787142007/unnamed_36_mjk3zl.webp", title: "Kochi Marriott Hotel" },
        { url: "https://res.cloudinary.com/ltevzqit/image/upload/v1787142005/unnamed_29_bd0f3a.webp", title: "Kochi Marriott Hotel" },
        { url: "https://res.cloudinary.com/ltevzqit/image/upload/v1787142006/unnamed_35_dmmf4t.webp", title: "Kochi Marriott Hotel" },
        { url: "https://res.cloudinary.com/ltevzqit/image/upload/v1787142006/unnamed_34_v9phzd.webp", title: "Kochi Marriott Hotel" },
        { url: "https://res.cloudinary.com/ltevzqit/image/upload/v1787142006/unnamed_33_vseznz.webp", title: "Kochi Marriott Hotel" },
        { url: "https://res.cloudinary.com/ltevzqit/image/upload/v1787142005/unnamed_30_obnv4n.webp", title: "Kochi Marriott Hotel" },
        { url: "https://res.cloudinary.com/ltevzqit/image/upload/v1787142006/unnamed_32_ylc9jv.webp", title: "Kochi Marriott Hotel" },
        { url: "https://res.cloudinary.com/ltevzqit/image/upload/v1787142005/unnamed_31_m8jodd.webp", title: "Kochi Marriott Hotel" },
        { url: "https://res.cloudinary.com/ltevzqit/image/upload/v1787142005/unnamed_27_pfgcig.webp", title: "Kochi Marriott Hotel" },
        { url: "https://res.cloudinary.com/ltevzqit/image/upload/v1787142004/unnamed_23_ocyunk.webp", title: "Kochi Marriott Hotel" },
        { url: "https://res.cloudinary.com/ltevzqit/image/upload/v1787142005/unnamed_28_zuugbm.webp", title: "Kochi Marriott Hotel" },
        { url: "https://res.cloudinary.com/ltevzqit/image/upload/v1787142005/unnamed_26_yukjwv.webp", title: "Kochi Marriott Hotel" },
        { url: "https://res.cloudinary.com/ltevzqit/image/upload/v1787142004/unnamed_25_jk14rm.webp", title: "Kochi Marriott Hotel" },
        { url: "https://res.cloudinary.com/ltevzqit/image/upload/v1787142003/unnamed_21_iuybkb.webp", title: "Kochi Marriott Hotel" },
        { url: "https://res.cloudinary.com/ltevzqit/image/upload/v1787142004/unnamed_24_neodsp.webp", title: "Kochi Marriott Hotel" },
        { url: "https://res.cloudinary.com/ltevzqit/image/upload/v1787142003/unnamed_22_c6d38t.webp", title: "Kochi Marriott Hotel" },
        { url: "https://res.cloudinary.com/ltevzqit/image/upload/v1787142003/unnamed_20_zxdolb.webp", title: "Kochi Marriott Hotel" },
        { url: "https://res.cloudinary.com/ltevzqit/image/upload/v1787142003/unnamed_17_jltwvf.webp", title: "Kochi Marriott Hotel" },
        { url: "https://res.cloudinary.com/ltevzqit/image/upload/v1787142003/unnamed_19_domwog.webp", title: "Kochi Marriott Hotel" },
        { url: "https://res.cloudinary.com/ltevzqit/image/upload/v1787142235/cokmd-arrival-4404-hor-clsc_cmhsoq.webp", title: "Le Meridien Kochi" },
        { url: "https://res.cloudinary.com/ltevzqit/image/upload/v1787142235/images_bh3kwp.jpg", title: "Le Meridien Kochi" },
        { url: "https://res.cloudinary.com/ltevzqit/image/upload/v1787142235/Le_Meridien_Kochi_3_dbuizq.jpg", title: "Le Meridien Kochi" },
        { url: "https://res.cloudinary.com/ltevzqit/image/upload/v1787142236/unnamed_1_ufbw3i.webp", title: "Le Meridien Kochi" },
        { url: "https://res.cloudinary.com/ltevzqit/image/upload/v1787142236/unnamed_3_ptctr0.webp", title: "Le Meridien Kochi" },
        { url: "https://res.cloudinary.com/ltevzqit/image/upload/v1787142265/unnamed_5_ccb8gd.webp", title: "Le Meridien Kochi" },
        { url: "https://res.cloudinary.com/ltevzqit/image/upload/v1787142266/unnamed_6_ooy6vg.webp", title: "Le Meridien Kochi" },
        { url: "https://res.cloudinary.com/ltevzqit/image/upload/v1787142266/unnamed_7_x1ejdt.webp", title: "Le Meridien Kochi" },
        { url: "https://res.cloudinary.com/ltevzqit/image/upload/v1787142266/unnamed_8_suksow.webp", title: "Le Meridien Kochi" },
        { url: "https://res.cloudinary.com/ltevzqit/image/upload/v1787142267/unnamed_9_gx5jrz.webp", title: "Le Meridien Kochi" },
        { url: "https://res.cloudinary.com/ltevzqit/image/upload/v1787142285/unnamed_26_ff3nrm.webp", title: "Le Meridien Kochi" },
        { url: "https://res.cloudinary.com/ltevzqit/image/upload/v1787142328/unnamed_27_xnfono.webp", title: "Le Meridien Kochi" },
        { url: "https://res.cloudinary.com/ltevzqit/image/upload/v1787142329/unnamed_28_g3dxpt.webp", title: "Le Meridien Kochi" },
        { url: "https://res.cloudinary.com/ltevzqit/image/upload/v1787142329/unnamed_29_gz05h5.webp", title: "Le Meridien Kochi" },
        { url: "https://res.cloudinary.com/ltevzqit/image/upload/v1787142329/unnamed_31_zdchw6.webp", title: "Le Meridien Kochi" },
        { url: "https://res.cloudinary.com/ltevzqit/image/upload/v1787142329/unnamed_32_x8c0qk.webp", title: "Le Meridien Kochi" },
        { url: "https://res.cloudinary.com/ltevzqit/image/upload/v1787142330/unnamed_33_yd3yas.webp", title: "Le Meridien Kochi" },
        { url: "https://res.cloudinary.com/ltevzqit/image/upload/v1787142330/unnamed_34_frdwd4.webp", title: "Le Meridien Kochi" },
        { url: "https://res.cloudinary.com/ltevzqit/image/upload/v1787142330/unnamed_35_qznmgr.webp", title: "Le Meridien Kochi" },
        { url: "https://res.cloudinary.com/ltevzqit/image/upload/v1787142331/unnamed_36_dvyf1c.webp", title: "Le Meridien Kochi" },
        { url: "https://res.cloudinary.com/ltevzqit/image/upload/v1787142331/unnamed_37_l3x0hc.webp", title: "Le Meridien Kochi" },
        { url: "https://res.cloudinary.com/ltevzqit/image/upload/v1787142332/unnamed_38_o4rzvn.webp", title: "Le Meridien Kochi" },
        { url: "https://res.cloudinary.com/ltevzqit/image/upload/v1787142332/unnamed_39_pv5w35.webp", title: "Le Meridien Kochi" },
        { url: "https://res.cloudinary.com/ltevzqit/image/upload/v1787142332/unnamed_41_q38jr6.webp", title: "Le Meridien Kochi" },
        { url: "https://res.cloudinary.com/ltevzqit/image/upload/v1787142333/unnamed_42_ddrmdn.webp", title: "Le Meridien Kochi" },
        { url: "https://res.cloudinary.com/ltevzqit/image/upload/v1787142333/unnamed_43_le4mhg.webp", title: "Le Meridien Kochi" },
        { url: "https://res.cloudinary.com/ltevzqit/image/upload/v1787143169/unnamed_1_skk7zs.webp", title: "Olive Downtown Kochi" },
        { url: "https://res.cloudinary.com/ltevzqit/image/upload/v1787143169/unnamed_2_sf0dzu.webp", title: "Olive Downtown Kochi" },
        { url: "https://res.cloudinary.com/ltevzqit/image/upload/v1787143170/unnamed_3_jftice.webp", title: "Olive Downtown Kochi" },
        { url: "https://res.cloudinary.com/ltevzqit/image/upload/v1787143170/unnamed_4_lgmto3.webp", title: "Olive Downtown Kochi" },
        { url: "https://res.cloudinary.com/ltevzqit/image/upload/v1787143171/unnamed_5_qxpr8p.webp", title: "Olive Downtown Kochi" },
        { url: "https://res.cloudinary.com/ltevzqit/image/upload/v1787143191/unnamed_6_elrxu7.webp", title: "Olive Downtown Kochi" },
        { url: "https://res.cloudinary.com/ltevzqit/image/upload/v1787143192/unnamed_7_pxutjr.webp", title: "Olive Downtown Kochi" },
        { url: "https://res.cloudinary.com/ltevzqit/image/upload/v1787143193/unnamed_9_lqnbi1.webp", title: "Olive Downtown Kochi" },
        { url: "https://res.cloudinary.com/ltevzqit/image/upload/v1787143193/unnamed_11_dn40kr.webp", title: "Olive Downtown Kochi" },
        { url: "https://res.cloudinary.com/ltevzqit/image/upload/v1787143193/unnamed_8_saky69.webp", title: "Olive Downtown Kochi" },
        { url: "https://res.cloudinary.com/ltevzqit/image/upload/v1787143194/unnamed_12_w7msrx.webp", title: "Olive Downtown Kochi" },
        { url: "https://res.cloudinary.com/ltevzqit/image/upload/v1787143194/unnamed_13_rrrvgp.webp", title: "Olive Downtown Kochi" },
        { url: "https://res.cloudinary.com/ltevzqit/image/upload/v1787143195/unnamed_14_zuglqo.webp", title: "Olive Downtown Kochi" },
        { url: "https://res.cloudinary.com/ltevzqit/image/upload/v1787143195/unnamed_15_cdfl9u.webp", title: "Olive Downtown Kochi" },
        { url: "https://res.cloudinary.com/ltevzqit/image/upload/v1787143196/unnamed_16_ffyyar.webp", title: "Olive Downtown Kochi" },
        { url: "https://res.cloudinary.com/ltevzqit/image/upload/v1787143196/unnamed_17_vdpjd3.webp", title: "Olive Downtown Kochi" },
        { url: "https://res.cloudinary.com/ltevzqit/image/upload/v1787143197/unnamed_18_zrro2q.webp", title: "Olive Downtown Kochi" },
        { url: "https://res.cloudinary.com/ltevzqit/image/upload/v1787143198/unnamed_19_atisya.webp", title: "Olive Downtown Kochi" },
        { url: "https://res.cloudinary.com/ltevzqit/image/upload/v1787143198/unnamed_bpch9v.webp", title: "Olive Downtown Kochi" },
        { url: "https://res.cloudinary.com/ltevzqit/image/upload/v1787143491/unnamed_4_bqfq9c.webp", title: "Ramada by Wyndham Kochi" },
        { url: "https://res.cloudinary.com/ltevzqit/image/upload/v1787143492/unnamed_5_h6zj88.webp", title: "Ramada by Wyndham Kochi" },
        { url: "https://res.cloudinary.com/ltevzqit/image/upload/v1787143492/unnamed_6_evlz4t.webp", title: "Ramada by Wyndham Kochi" },
        { url: "https://res.cloudinary.com/ltevzqit/image/upload/v1787143493/unnamed_7_dfo7cb.webp", title: "Ramada by Wyndham Kochi" },
        { url: "https://res.cloudinary.com/ltevzqit/image/upload/v1787143493/unnamed_8_voz4do.webp", title: "Ramada by Wyndham Kochi" },
        { url: "https://res.cloudinary.com/ltevzqit/image/upload/v1787143494/unnamed_9_p0oeer.webp", title: "Ramada by Wyndham Kochi" },
        { url: "https://res.cloudinary.com/ltevzqit/image/upload/v1787143494/unnamed_10_x4jk8c.webp", title: "Ramada by Wyndham Kochi" },
        { url: "https://res.cloudinary.com/ltevzqit/image/upload/v1787143495/unnamed_11_e6eiuw.webp", title: "Ramada by Wyndham Kochi" },
        { url: "https://res.cloudinary.com/ltevzqit/image/upload/v1787143496/unnamed_12_my3wsp.webp", title: "Ramada by Wyndham Kochi" },
        { url: "https://res.cloudinary.com/ltevzqit/image/upload/v1787143496/unnamed_13_ze1nv0.webp", title: "Ramada by Wyndham Kochi" },
        { url: "https://res.cloudinary.com/ltevzqit/image/upload/v1787143497/unnamed_15_vhub6p.webp", title: "Ramada by Wyndham Kochi" },
        { url: "https://res.cloudinary.com/ltevzqit/image/upload/v1787143498/unnamed_16_wloyve.webp", title: "Ramada by Wyndham Kochi" },
        { url: "https://res.cloudinary.com/ltevzqit/image/upload/v1787143498/unnamed_17_znadxg.webp", title: "Ramada by Wyndham Kochi" },
        { url: "https://res.cloudinary.com/ltevzqit/image/upload/v1787143499/unnamed_18_ncqiyu.webp", title: "Ramada by Wyndham Kochi" },
        { url: "https://res.cloudinary.com/ltevzqit/image/upload/v1787143499/unnamed_19_ljywhf.webp", title: "Ramada by Wyndham Kochi" },
        { url: "https://res.cloudinary.com/ltevzqit/image/upload/v1787143500/unnamed_20_gni6lv.webp", title: "Ramada by Wyndham Kochi" },
        { url: "https://res.cloudinary.com/ltevzqit/image/upload/v1787143501/unnamed_21_ezbvfw.webp", title: "Ramada by Wyndham Kochi" },
        { url: "https://res.cloudinary.com/ltevzqit/image/upload/v1787143501/unnamed_22_efpipi.webp", title: "Ramada by Wyndham Kochi" },
        { url: "https://res.cloudinary.com/ltevzqit/image/upload/v1787143502/unnamed_23_fv30wx.webp", title: "Ramada by Wyndham Kochi" },
        { url: "https://res.cloudinary.com/ltevzqit/image/upload/v1787143503/unnamed_24_ycvbn1.webp", title: "Ramada by Wyndham Kochi" },
        { url: "https://res.cloudinary.com/ltevzqit/image/upload/v1787143503/unnamed_25_mxhxm3.webp", title: "Ramada by Wyndham Kochi" },
        { url: "https://res.cloudinary.com/ltevzqit/image/upload/v1787143504/unnamed_26_x335sk.webp", title: "Ramada by Wyndham Kochi" },
        { url: "https://res.cloudinary.com/ltevzqit/image/upload/v1787143504/unnamed_27_bdedte.webp", title: "Ramada by Wyndham Kochi" },
        { url: "https://res.cloudinary.com/ltevzqit/image/upload/v1787143505/unnamed_28_kburty.webp", title: "Ramada by Wyndham Kochi" },
        { url: "https://res.cloudinary.com/ltevzqit/image/upload/v1787143506/unnamed_29_wxgi9a.webp", title: "Ramada by Wyndham Kochi" },
        { url: "https://res.cloudinary.com/ltevzqit/image/upload/v1787143506/unnamed_enobwe.webp", title: "Ramada by Wyndham Kochi" }
      ] 
    },
    { id: 'kumarakom', title: "Gokulam Grand Resort and Spa", sub: "Kumarakom", rating: "★★★★★ Luxury Resort & Spa", img: "https://res.cloudinary.com/ltevzqit/image/upload/v1787139409/unnamed_1_gk4oyr.webp", gallery: ["https://res.cloudinary.com/ltevzqit/image/upload/v1787139409/unnamed_1_gk4oyr.webp", "https://res.cloudinary.com/ltevzqit/image/upload/v1787139755/image_s8pvsi.png", "https://res.cloudinary.com/ltevzqit/image/upload/v1787139753/unnamed_wfdowy.webp", "https://res.cloudinary.com/ltevzqit/image/upload/v1787139753/unnamed_4_xcvdn9.webp", "https://res.cloudinary.com/ltevzqit/image/upload/v1787139753/unnamed_2_qyfrbg.webp", "https://res.cloudinary.com/ltevzqit/image/upload/v1787139753/unnamed_5_k01ls7.webp", "https://res.cloudinary.com/ltevzqit/image/upload/v1787139753/unnamed_3_gyikzi.webp"] },
    { 
      id: 'wayanad', 
      title: "Jeevess Retreat Wayanad", 
      sub: "Wayanad", 
      rating: "★★★★★ Luxury Retreat & Spa", 
      img: "https://res.cloudinary.com/ltevzqit/image/upload/v1787141687/unnamed_6_s1x2qo.webp", 
      gallery: [
        "https://res.cloudinary.com/ltevzqit/image/upload/v1787141687/unnamed_6_s1x2qo.webp",
        "https://res.cloudinary.com/ltevzqit/image/upload/v1787141687/unnamed_9_owozwd.webp",
        "https://res.cloudinary.com/ltevzqit/image/upload/v1787141687/unnamed_7_fvwegt.webp",
        "https://res.cloudinary.com/ltevzqit/image/upload/v1787141687/unnamed_8_sfcyax.webp",
        "https://res.cloudinary.com/ltevzqit/image/upload/v1787141688/unnamed_10_fccru2.webp",
        "https://res.cloudinary.com/ltevzqit/image/upload/v1787141688/unnamed_11_kbrafx.webp",
        "https://res.cloudinary.com/ltevzqit/image/upload/v1787141688/unnamed_12_idj4vy.webp",
        "https://res.cloudinary.com/ltevzqit/image/upload/v1787141688/unnamed_14_kwrajg.webp",
        "https://res.cloudinary.com/ltevzqit/image/upload/v1787141688/unnamed_15_fpohgk.webp",
        "https://res.cloudinary.com/ltevzqit/image/upload/v1787141689/unnamed_16_p9jlir.webp"
      ] 
    },
    { 
      id: 'vagamon', 
      title: "Olga Resorts Vagamon", 
      sub: "Vagamon", 
      rating: "★★★★★ Premium Hill Resort", 
      img: "https://res.cloudinary.com/ltevzqit/image/upload/v1787142892/unnamed_1_dgwmp0.webp", 
      gallery: [
        "https://res.cloudinary.com/ltevzqit/image/upload/v1787142892/unnamed_1_dgwmp0.webp",
        "https://res.cloudinary.com/ltevzqit/image/upload/v1787142893/unnamed_2_mtlpwx.webp",
        "https://res.cloudinary.com/ltevzqit/image/upload/v1787142893/unnamed_4_bqxwl8.webp",
        "https://res.cloudinary.com/ltevzqit/image/upload/v1787142893/unnamed_3_tgtoci.webp",
        "https://res.cloudinary.com/ltevzqit/image/upload/v1787142894/unnamed_5_nxlgcp.webp",
        "https://res.cloudinary.com/ltevzqit/image/upload/v1787142894/unnamed_6_pypr7g.webp",
        "https://res.cloudinary.com/ltevzqit/image/upload/v1787142895/unnamed_7_ahj9sj.webp",
        "https://res.cloudinary.com/ltevzqit/image/upload/v1787142895/unnamed_8_s43g2j.webp",
        "https://res.cloudinary.com/ltevzqit/image/upload/v1787142896/unnamed_9_q5onno.webp",
        "https://res.cloudinary.com/ltevzqit/image/upload/v1787142897/unnamed_10_vwy2om.webp",
        "https://res.cloudinary.com/ltevzqit/image/upload/v1787142897/unnamed_11_o7chav.webp",
        "https://res.cloudinary.com/ltevzqit/image/upload/v1787142897/unnamed_12_mbcir4.webp",
        "https://res.cloudinary.com/ltevzqit/image/upload/v1787142898/unnamed_13_dwbljp.webp",
        "https://res.cloudinary.com/ltevzqit/image/upload/v1787142898/unnamed_14_i5swdc.webp",
        "https://res.cloudinary.com/ltevzqit/image/upload/v1787142899/unnamed_16_vkfhb5.webp",
        "https://res.cloudinary.com/ltevzqit/image/upload/v1787142900/unnamed_15_pihu5w.webp"
      ] 
    }
  ];

  const categoriesList = ['thekkady', 'munnar', 'alappuzha', 'kovalam', 'kochi', 'kumarakom', 'wayanad', 'vagamon'];
  let activeCategory = 'thekkady';

  // Track scroll position of hotels marquee
  let expectedScrollLeft = 0;
  let currentScrollPosition = 0; // Float scroll accumulator to avoid sub-pixel rounding freeze on mobile
  
  // Track classes for 4 cards (left, center, right, and hidden buffer)
  let slideClasses = ['left-slide', 'center-slide', 'right-slide', 'hidden-right'];
  let isTransitioning = false;
  let destTransitionTimeout = null;
  let mobileActiveIndex = 0; // Track active index on mobile snap carousel

  // Sync both sets of pill tab backdrops
  function syncBackdropForContainer(containerId, backdropId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    const backdrop = document.getElementById(backdropId);
    const activeBtn = container.querySelector('.dest-pill-btn.active');
    
    if (backdrop && activeBtn) {
      backdrop.style.left = `${activeBtn.offsetLeft}px`;
      backdrop.style.width = `${activeBtn.offsetWidth}px`;
    }
  }

  function syncAllBackdrops() {
    syncBackdropForContainer('hotelPillNav', 'destPillBackdrop');
    syncBackdropForContainer('expPillNav', 'expPillBackdrop');
  }

  window.filterDestinations = function(category) {
    activeCategory = category;

    // Reset transition states immediately to clear any running shift animations
    if (destTransitionTimeout) {
      clearTimeout(destTransitionTimeout);
      destTransitionTimeout = null;
    }
    isTransitioning = false;

    // Update active tab styling
    const hotelNav = document.getElementById('hotelPillNav');
    if (hotelNav) {
      const buttons = hotelNav.querySelectorAll('.dest-pill-btn');
      buttons.forEach(btn => {
        const onclickAttr = btn.getAttribute('onclick');
        if (onclickAttr && onclickAttr.includes(category)) {
          btn.classList.add('active');
        } else {
          btn.classList.remove('active');
        }
      });

      // Smooth scroll the selected tab into view horizontally on mobile
      const activeBtn = hotelNav.querySelector('.dest-pill-btn.active');
      if (activeBtn) {
        const containerWidth = hotelNav.clientWidth;
        const btnWidth = activeBtn.clientWidth;
        const btnLeft = activeBtn.offsetLeft;
        hotelNav.scrollTo({
          left: btnLeft - (containerWidth / 2) + (btnWidth / 2),
          behavior: 'smooth'
        });
      }
    }

    // Sync sliding backdrop pill background position
    syncAllBackdrops();

    const sliderContainer = document.querySelector('.dest-slider-container.single-hotel');
    if (!sliderContainer) return;

    const slides = sliderContainer.querySelectorAll('.dest-slide-card');

    // 1. Trigger exit shrink-down animation on current cards
    slides.forEach(slide => {
      slide.classList.remove('card-entering');
      slide.classList.add('card-switching');
    });

    destTransitionTimeout = setTimeout(() => {
      sliderContainer.innerHTML = ''; // Clear existing cards
      sliderContainer.scrollLeft = 0; // Reset scroll position to beginning
      expectedScrollLeft = 0;
      currentScrollPosition = 0;

      const item = hotelData.find(h => h.id === category);
      if (item && item.gallery && item.gallery.length > 0) {
        // Create marquee track container
        const track = document.createElement('div');
        track.className = 'hotel-marquee-track';
        sliderContainer.appendChild(track);

        // Helper to append a set of cards
        const createCards = () => {
          item.gallery.forEach((photoItem, index) => {
            const photoUrl = typeof photoItem === 'string' ? photoItem : photoItem.url;
            const photoTitle = (typeof photoItem === 'object' && photoItem.title) ? photoItem.title : item.title;

            const card = document.createElement('div');
            card.className = 'dest-slide-card center-slide card-entering';
            card.setAttribute('data-hotel-id', item.id);
            
            card.innerHTML = `
              <img src="${getCloudinaryUrl(photoUrl)}" alt="${photoTitle} - View ${index + 1}" class="hotel-img" style="display: block;">
              <div class="slide-card-content text-bottom">
                  <h3>${photoTitle}</h3>
              </div>
            `;
            track.appendChild(card);
          });
        };

        // Create one set of cards (no duplication)
        createCards();
      }
    }, 140);
  };

  // ==========================================
  // 11. Destinations Section (Activity Switcher)
  // ==========================================
  const expData = {
    munnar: {
      title: "Munnar",
      sub: "Tea Plantations",
      desc: "Wander through the lush, emerald tea plantations that blanket the misty hills of Munnar.",
      img: "assets/exp_spicetrails.png"
    },
    alappuzha: {
      title: "Alappuzha",
      sub: "Houseboat Cruise",
      desc: "Drift along the tranquil backwaters in a traditional luxury houseboat, experiencing the serene rhythm of Alappuzha.",
      img: "assets/exp_backwaters.png"
    },
    trivandrum: {
      title: "Trivandrum",
      sub: "Beach Holiday",
      desc: "Relax on the sun-kissed golden sands and soak in the vibrant coastal energy of Trivandrum's pristine beaches.",
      img: "assets/exp_kovalam.png"
    },
    thekkady: {
      title: "Thekkady",
      sub: "Ziplining & Adventure",
      desc: "Soar through the mountain canopies and experience a thrilling bird's-eye view of spice valleys and dense jungle foliage.",
      img: "assets/blanket_days_1.jpg"
    },
    kochi: {
      title: "Kochi",
      sub: "Kathakali & Culture",
      desc: "Witness the majestic and colorful storytelling of a classical Kathakali dance performance, reflecting Kerala's deep artistic heritage.",
      img: "assets/exp_culture.png"
    },
    kumarakom: {
      title: "Kumarakom",
      sub: "Ayurveda & Wellness",
      desc: "Rejuvenate your body and mind with authentic, holistic Ayurvedic spa treatments overlooking the peaceful Vembanad Lake.",
      img: "assets/exp_ayurveda.png"
    },
    athirapally: {
      title: "Athirapally",
      sub: "Waterfalls & Wildlife",
      desc: "Witness the majestic power of the Athirapally waterfalls cascading through dense, untouched tropical forests.",
      img: "assets/exp_athirapally.png"
    }
  };

  // Autoplay configuration for experiences
  const expCategories = ['munnar', 'alappuzha', 'trivandrum', 'thekkady', 'kochi', 'kumarakom', 'athirapally'];
  let currentExpIndex = 0;
  let expAutoplayTimer = null;

  function startExpAutoplay() {
    stopExpAutoplay();
    expAutoplayTimer = setInterval(() => {
      currentExpIndex = (currentExpIndex + 1) % expCategories.length;
      window.filterExperiences(expCategories[currentExpIndex]);
    }, 6000);
  }

  function stopExpAutoplay() {
    if (expAutoplayTimer) {
      clearInterval(expAutoplayTimer);
      expAutoplayTimer = null;
    }
  }

  window.filterExperiences = function(category) {
    const data = expData[category];
    if (!data) return;

    // Sync active index
    const catIndex = expCategories.indexOf(category);
    if (catIndex !== -1) {
      currentExpIndex = catIndex;
    }

    // Restart autoplay timer to reset the 6s countdown on manual click
    startExpAutoplay();

    // Update active button styling in experience section
    const container = document.getElementById('expPillNav');
    if (container) {
      const buttons = container.querySelectorAll('.dest-pill-btn');
      buttons.forEach(btn => {
        const onclickAttr = btn.getAttribute('onclick');
        if (onclickAttr && onclickAttr.includes(category)) {
          btn.classList.add('active');
        } else {
          btn.classList.remove('active');
        }
      });

      // Smooth scroll the selected tab into view horizontally on mobile
      const activeBtn = container.querySelector('.dest-pill-btn.active');
      if (activeBtn) {
        const containerWidth = container.clientWidth;
        const btnWidth = activeBtn.clientWidth;
        const btnLeft = activeBtn.offsetLeft;
        container.scrollTo({
          left: btnLeft - (containerWidth / 2) + (btnWidth / 2),
          behavior: 'smooth'
        });
      }
    }

    // Sync sliding backdrop pill background position
    syncAllBackdrops();

    // Dynamic fade transition for experience content (smoother, slower fade & slide)
    const imgEl = document.getElementById('expBannerImg');
    const cardEl = document.getElementById('expBannerCard');
    const titleEl = document.getElementById('expCardTitle');
    const subEl = document.getElementById('expCardSubtitle');
    const descEl = document.getElementById('expCardDesc');

    if (imgEl && cardEl) {
      imgEl.style.transition = 'opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
      cardEl.style.transition = 'opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1), transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)';

      imgEl.style.opacity = '0';
      cardEl.style.opacity = '0';
      cardEl.style.transform = 'translateY(15px)';

      setTimeout(() => {
        imgEl.src = getCloudinaryUrl(data.img);
        if (titleEl) titleEl.textContent = data.title;
        if (subEl) subEl.textContent = data.sub;
        if (descEl) descEl.textContent = data.desc;

        imgEl.style.opacity = '1';
        cardEl.style.opacity = '1';
        cardEl.style.transform = 'translateY(0)';
      }, 350);
    }
  };

  // Pause autoplay when hovering over the experiences block
  const expBannerWrapper = document.getElementById('expBannerWrapper');
  if (expBannerWrapper) {
    expBannerWrapper.addEventListener('mouseenter', stopExpAutoplay);
    expBannerWrapper.addEventListener('mouseleave', startExpAutoplay);
  }

  // ==========================================
  // 12. Number Counter Scroll Animation
  // ==========================================
  const statsContainer = document.getElementById('aboutStatsBar');
  if (statsContainer) {
    const counterObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const statNumbers = entry.target.querySelectorAll('.stat-number');
          statNumbers.forEach(el => {
            const target = parseFloat(el.getAttribute('data-target'));
            const suffix = el.getAttribute('data-suffix') || '';
            const decimals = parseInt(el.getAttribute('data-decimals') || '0', 10);
            const duration = 2500; // 2.5 seconds smooth duration
            const startTime = performance.now();

            function updateCounter(currentTime) {
              const elapsedTime = currentTime - startTime;
              const progress = Math.min(elapsedTime / duration, 1);
              const easeOut = 1 - Math.pow(1 - progress, 4);
              const currentVal = target * easeOut;

              el.textContent = currentVal.toFixed(decimals) + suffix;

              if (progress < 1) {
                requestAnimationFrame(updateCounter);
              } else {
                el.textContent = target.toFixed(decimals) + suffix;
              }
            }

            requestAnimationFrame(updateCounter);
          });
          observer.unobserve(entry.target); // Run once when scrolled into view
        }
      });
    }, {
      threshold: 0.05,
      rootMargin: '0px 0px 50px 0px'
    });

    counterObserver.observe(statsContainer);
  }

  // ==========================================
  // 13. Mobile Floating CTA Multi-State Scroll Handler
  // ==========================================
  const mobileFloatingCta = document.getElementById('mobileFloatingCta');
  const heroSection = document.getElementById('home');
  const destinationsSection = document.getElementById('destinations');

  if (mobileFloatingCta && heroSection) {
    const handleScrollFloatingCta = () => {
      const heroBottom = heroSection.getBoundingClientRect().bottom;
      const destinationsBottom = destinationsSection ? destinationsSection.getBoundingClientRect().bottom : 9999;

      if (heroBottom > 120) {
        mobileFloatingCta.classList.remove('state-center', 'state-side');
      }
      else if (destinationsBottom <= 150) {
        mobileFloatingCta.classList.remove('state-center');
        mobileFloatingCta.classList.add('state-side');
      }
      else {
        mobileFloatingCta.classList.remove('state-side');
        mobileFloatingCta.classList.add('state-center');
      }
    };

    window.addEventListener('scroll', handleScrollFloatingCta, { passive: true });
    handleScrollFloatingCta();
  }

  // ==========================================
  // 14. Hotel Photo Gallery Lightbox Modal Logic
  // ==========================================
  const galleryOverlay = document.getElementById('galleryOverlay');
  const galleryMainImg = document.getElementById('galleryMainImg');
  const galleryHotelName = document.getElementById('galleryHotelName');
  const galleryPhotoCounter = document.getElementById('galleryPhotoCounter');
  const galleryThumbnails = document.getElementById('galleryThumbnails');
  const galleryCloseBtn = document.getElementById('galleryCloseBtn');
  const galleryPrevBtn = document.getElementById('galleryPrevBtn');
  const galleryNextBtn = document.getElementById('galleryNextBtn');

  let currentGalleryPhotos = [];
  let currentPhotoIndex = 0;
  let currentHotelName = "";

  const openGallery = (hotel) => {
    if (!hotel.gallery || hotel.gallery.length === 0) return;

    currentGalleryPhotos = hotel.gallery;
    currentPhotoIndex = 0;
    currentHotelName = hotel.title;

    updateGalleryView();

    galleryOverlay.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent body scroll
    
    // Auto-focus overlay for keyboard interactions
    galleryOverlay.focus();
  };

  const closeGallery = () => {
    galleryOverlay.classList.remove('active');
    document.body.style.overflow = ''; // Restore scroll
  };

  const updateGalleryView = () => {
    if (currentGalleryPhotos.length === 0) return;

    // Apply switching transition to slide main image out
    galleryMainImg.classList.add('switching');

    setTimeout(() => {
      const photoItem = currentGalleryPhotos[currentPhotoIndex];
      const photoUrl = typeof photoItem === 'string' ? photoItem : photoItem.url;
      const photoTitle = (typeof photoItem === 'object' && photoItem.title) ? photoItem.title : currentHotelName;

      galleryMainImg.src = getCloudinaryUrl(photoUrl);
      galleryHotelName.textContent = photoTitle;
      galleryPhotoCounter.textContent = `${currentPhotoIndex + 1} of ${currentGalleryPhotos.length}`;

      // Update active thumbnail
      const thumbs = galleryThumbnails.querySelectorAll('.gallery-thumb');
      thumbs.forEach((thumb, idx) => {
        if (idx === currentPhotoIndex) {
          thumb.classList.add('active');
          thumb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        } else {
          thumb.classList.remove('active');
        }
      });

      galleryMainImg.classList.remove('switching');
    }, 150);
  };

  const showNextPhoto = () => {
    currentPhotoIndex = (currentPhotoIndex + 1) % currentGalleryPhotos.length;
    updateGalleryView();
  };

  const showPrevPhoto = () => {
    currentPhotoIndex = (currentPhotoIndex - 1 + currentGalleryPhotos.length) % currentGalleryPhotos.length;
    updateGalleryView();
  };

  // Build thumbnails dynamically
  const buildThumbnails = () => {
    galleryThumbnails.innerHTML = '';
    currentGalleryPhotos.forEach((photoItem, idx) => {
      const photoUrl = typeof photoItem === 'string' ? photoItem : photoItem.url;
      const thumbDiv = document.createElement('div');
      thumbDiv.className = `gallery-thumb ${idx === 0 ? 'active' : ''}`;
      
      const thumbImg = document.createElement('img');
      thumbImg.src = getCloudinaryUrl(photoUrl);
      thumbImg.alt = `Thumbnail ${idx + 1}`;
      
      thumbDiv.appendChild(thumbImg);
      thumbDiv.addEventListener('click', () => {
        if (idx !== currentPhotoIndex) {
          currentPhotoIndex = idx;
          updateGalleryView();
        }
      });
      galleryThumbnails.appendChild(thumbDiv);
    });
  };

  // Modal Control Triggers
  if (galleryCloseBtn) galleryCloseBtn.addEventListener('click', closeGallery);
  if (galleryPrevBtn) galleryPrevBtn.addEventListener('click', showPrevPhoto);
  if (galleryNextBtn) galleryNextBtn.addEventListener('click', showNextPhoto);

  // Click outside main container closes gallery
  if (galleryOverlay) {
    galleryOverlay.addEventListener('click', (e) => {
      if (e.target === galleryOverlay) {
        closeGallery();
      }
    });
  }

  // Keyboard navigation support
  window.addEventListener('keydown', (e) => {
    if (!galleryOverlay.classList.contains('active')) return;

    if (e.key === 'Escape') {
      closeGallery();
    } else if (e.key === 'ArrowRight') {
      showNextPhoto();
    } else if (e.key === 'ArrowLeft') {
      showPrevPhoto();
    }
  });

  // ==========================================
  // 12. Infinite Auto-Marquee and Drag-to-Scroll (Hotels Section)
  // ==========================================
  const hotelSlider = document.querySelector('.dest-slider-container.single-hotel');
  let isUserScrolling = false;
  let userScrollTimeout = null;
  let isHovered = false;
  let isDown = false;
  let startX = 0;
  let scrollLeftStart = 0;

  if (hotelSlider) {
    // Detect mouse hover to slow down speed
    hotelSlider.addEventListener('mouseenter', () => {
      isHovered = true;
    });
    hotelSlider.addEventListener('mouseleave', () => {
      isHovered = false;
      isDown = false;
      hotelSlider.classList.remove('grabbing');
    });

    // Detect native/manual scroll actions (touch swipes, trackpad/wheel scrolls)
    hotelSlider.addEventListener('scroll', () => {
      // Check if actual scroll position deviates from programmatic auto-scroll path
      const diff = Math.abs(hotelSlider.scrollLeft - expectedScrollLeft);
      if (diff > 8) { // Increased threshold to avoid sub-pixel rounding false positives
        // User is interacting! Halt auto-scroll.
        isUserScrolling = true;
        clearTimeout(userScrollTimeout);
        userScrollTimeout = setTimeout(() => {
          isUserScrolling = false;
          currentScrollPosition = hotelSlider.scrollLeft;
          expectedScrollLeft = hotelSlider.scrollLeft;
        }, 2200); // Resume auto scroll after 2.2 seconds of inactivity
      }
    });

    // Desktop Mouse Drag-to-Scroll Mechanics
    hotelSlider.addEventListener('mousedown', (e) => {
      isDown = true;
      hotelSlider.classList.add('grabbing');
      startX = e.pageX - hotelSlider.offsetLeft;
      scrollLeftStart = hotelSlider.scrollLeft;
      isUserScrolling = true;
      clearTimeout(userScrollTimeout);
    });

    hotelSlider.addEventListener('mouseup', () => {
      isDown = false;
      hotelSlider.classList.remove('grabbing');
      userScrollTimeout = setTimeout(() => {
        isUserScrolling = false;
        currentScrollPosition = hotelSlider.scrollLeft;
        expectedScrollLeft = hotelSlider.scrollLeft;
      }, 2200);
    });

    hotelSlider.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - hotelSlider.offsetLeft;
      const walk = (x - startX) * 1.5; // Drag sensitivity multiplier
      hotelSlider.scrollLeft = scrollLeftStart - walk;
      expectedScrollLeft = hotelSlider.scrollLeft;
      currentScrollPosition = hotelSlider.scrollLeft;
    });

    // Touch Events for Mobile Drag-to-Scroll Mechanics (pause marquee on touch start/move)
    hotelSlider.addEventListener('touchstart', (e) => {
      isDown = true;
      isUserScrolling = true;
      clearTimeout(userScrollTimeout);
    }, { passive: true });

    hotelSlider.addEventListener('touchend', () => {
      isDown = false;
      clearTimeout(userScrollTimeout);
      userScrollTimeout = setTimeout(() => {
        isUserScrolling = false;
        currentScrollPosition = hotelSlider.scrollLeft;
        expectedScrollLeft = hotelSlider.scrollLeft;
      }, 2200);
    });

    // Stretched Frame-by-Frame requestAnimationFrame Loop
    function marqueeStep() {
      if (!isUserScrolling && !isDown) {
        const maxScroll = hotelSlider.scrollWidth - hotelSlider.clientWidth;
        if (maxScroll > 0 && currentScrollPosition < maxScroll - 1) {
          const speed = isHovered ? 0.25 : 0.65; // slow speed on hover, normal speed otherwise
          currentScrollPosition += speed;
          hotelSlider.scrollLeft = currentScrollPosition;
          expectedScrollLeft = hotelSlider.scrollLeft;
        }
      }
      requestAnimationFrame(marqueeStep);
    }

    // Start auto-scroll ticker loop
    requestAnimationFrame(marqueeStep);
  }

  // Initial setup trigger on load
  setTimeout(() => {
    syncAllBackdrops();
    window.filterDestinations('thekkady');
    window.filterExperiences('munnar');
  }, 300);

  window.addEventListener('resize', syncAllBackdrops);
});

