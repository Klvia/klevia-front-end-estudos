// Seleciona os elementos
        const btnMenuMobile = document.getElementById('btn-menu-mobile');
        const menuPrincipal = document.getElementById('menu-principal');
        const body = document.body;

        // Função para abrir/fechar o menu
        function toggleMenu() {
            btnMenuMobile.classList.toggle('active');
            menuPrincipal.classList.toggle('active');
            body.classList.toggle('menu-open');
        }

        // Click no botão
        btnMenuMobile.addEventListener('click', toggleMenu);

        // Fecha ao clicar nos links
        const navLinks = document.querySelectorAll('#menu-principal a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (menuPrincipal.classList.contains('active')) {
                    toggleMenu();
                }
            });
        });

        // Fecha ao clicar fora
        document.addEventListener('click', (e) => {
            if (!btnMenuMobile.contains(e.target) && !menuPrincipal.contains(e.target)) {
                if (menuPrincipal.classList.contains('active')) {
                    toggleMenu();
                }
            }
        });

        // Fecha ao redimensionar
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768 && menuPrincipal.classList.contains('active')) {
                toggleMenu();
            }
        });

        // ===== BOTÃO VOLTAR AO TOPO =====
        const btnVoltarTopo = document.getElementById('btn-voltar-topo');

        // Mostra/esconde o botão baseado no scroll
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                btnVoltarTopo.classList.add('visible');
            } else {
                btnVoltarTopo.classList.remove('visible');
            }
        });

        // Volta ao topo quando clicar
        btnVoltarTopo.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        // ===== DARK/LIGHT MODE =====
        const btnThemeToggle = document.getElementById('btn-theme-toggle');

        // Verifica se já existe uma preferência salva
        const temaAtual = body.className || 'light-mode';

        // Alterna entre dark e light mode
        btnThemeToggle.addEventListener('click', () => {
            if (body.classList.contains('light-mode')) {
                body.classList.remove('light-mode');
                body.classList.add('dark-mode');
            } else {
                body.classList.remove('dark-mode');
                body.classList.add('light-mode');
            }
        });