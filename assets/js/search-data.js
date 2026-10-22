// Index the personal site, excluding the theme's demo collections.
(() => {
  const go = (url) => () => { window.location.href = url; };
  window.siteSearchEntries = [
    {
      id: 'nav-about', title: 'About Dong Le',
      description: "Dong Le, Ph.D. student at NTU Singapore, supervised by Luu Anh Tuan. Research in efficient architectures, linear attention, and knowledge retrieval.", section: 'Pages',
      handler: go("/")
    },
    
    
    {
      id: "page-/publications/", title: "Publications",
      description: "Research in language models and natural language processing.", section: 'Pages',
      handler: go("/publications/")
    },
    
    {
      id: "page-/cv/", title: "CV",
      description: "Education and research experience", section: 'Pages',
      handler: go("/cv/")
    },
    
    
    {
      id: "paper-nguyen2025riding", title: "Riding on the Back of a Whale: A Hackathon Framework for Introducing High School Students to Large Language Models",
      description: "Nguyen, Duc and Le, Dong and Nguyen, Long and Vu, Quyen and Le, Tran and Nguyen, Dung and Huynh, Nga and Nguyen, Huong and Tran, Phat and Le, Dang and others · International Conference on Artificial Intelligence in Education · 2025", section: 'Publications',
      handler: go("/publications/#nguyen2025riding")
    },
    
    {
      id: "paper-truong2024crossing", title: "Crossing Linguistic Horizons: Finetuning and Comprehensive Evaluation of Vietnamese Large Language Models",
      description: "Truong*, Sang T. and Nguyen*, Duc Q. and Nguyen*, Toan and Le*, Dong D. and Truong*, Nhi N. and Quan, Tho and Koyejo, Sanmi · Findings of the Association for Computational Linguistics: NAACL 2024 · 2024", section: 'Publications',
      handler: go("/publications/#truong2024crossing")
    },
    
    {
      id: "paper-vo2024revitalizing", title: "Revitalizing bahnaric language through neural machine translation: challenges, strategies, and promising outcomes",
      description: "Vo, Hoang Nhat Khang and Le, Duc Dong and Phan, Tran Minh Dat and Nguyen, Tan Sang and Pham, Quoc Nguyen and Tran, Ngoc Oanh and Nguyen, Quang Duc and Vo, Tran Minh Hieu and Quan, Tho · Proceedings of the AAAI Conference on Artificial Intelligence · 2024", section: 'Publications',
      handler: go("/publications/#vo2024revitalizing")
    },
    
    {
      id: "paper-le2026dont", title: "Don't Read Everything: A Curvature-Conditioned Query for Linear Attention",
      description: "Le, Dong and Nguyen, Thong and Nguyen, Cong-Duy and Luu, Anh-Tuan · EMNLP · 2026", section: 'Publications',
      handler: go("/publications/#le2026dont")
    },
    
    {
      id: "paper-pham2026grace", title: "GRACE: Step-Level Benchmark for Faithful Reasoning over Context",
      description: "Pham, Hoang and Le, Dong and Luu, Anh-Tuan · EMNLP · 2026", section: 'Publications',
      handler: go("/publications/#pham2026grace")
    },
    
    
    {
      id: "news-emnlp",
      title: "Two papers accepted to EMNLP 2026: Don’t Read Everything and GRACE.", section: 'News',
      handler: go("/#news-heading")
    },
    
    { id: 'cv-pdf', title: 'Download CV (PDF)', section: 'Links', handler: go("/assets/pdf/CV.pdf") },
    { id: 'email', title: 'Email Dong Le', section: 'Links', handler: go("mailto:lddongcs@gmail.com") },
    { id: 'scholar', title: 'Google Scholar', section: 'Links', handler: go("https://scholar.google.com/citations?user=nC_ERxMAAAAJ") },
    { id: 'github', title: 'GitHub', section: 'Links', handler: go("https://github.com/ledong0110") },
    { id: 'linkedin', title: 'LinkedIn', section: 'Links', handler: go('https://www.linkedin.com/in/donglecs/') }
  ];
  window.dispatchEvent(new Event('site-search-ready'));
})();
