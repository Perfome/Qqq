document.addEventListener('DOMContentLoaded', function() {
    // Terminal yazma efekti
    const typingElement = document.getElementById('typingCommand');
    const originalText = "./compile_love.sh --for=berra --level=eternal";
    let charIndex = 0;
    
    function typeWriter() {
        if (charIndex < originalText.length) {
            typingElement.textContent = originalText.substring(0, charIndex + 1);
            charIndex++;
            setTimeout(typeWriter, 50);
        } else {
            // Yazma bittikten sonra çiçekleri oluştur
            createFlowers();
            createParticles();
            createBinaryRain();
        }
    }
    
    // Yazma efektini başlat
    setTimeout(() => {
        typeWriter();
    }, 1000);
    
    // Çiçekleri oluştur
    function createFlowers() {
        const container = document.getElementById('flowerContainer');
        const flowerCount = 9;
        const colors = [
            { stem: '#05d9e8', petals: '#8a2be2', glow: '#8a2be2' }, // Mor-Mavi
            { stem: '#00ff9d', petals: '#ff2a6d', glow: '#ff2a6d' }, // Pembe-Yeşil
            { stem: '#ff2a6d', petals: '#05d9e8', glow: '#05d9e8' }, // Mavi-Pembe
            { stem: '#8a2be2', petals: '#00ff9d', glow: '#00ff9d' }, // Yeşil-Mor
            { stem: '#05d9e8', petals: '#ff2a6d', glow: '#ff2a6d' }, // Pembe-Mavi
            { stem: '#ff2a6d', petals: '#8a2be2', glow: '#8a2be2' }, // Mor-Pembe
            { stem: '#00ff9d', petals: '#05d9e8', glow: '#05d9e8' }, // Mavi-Yeşil
            { stem: '#8a2be2', petals: '#ff2a6d', glow: '#ff2a6d' }, // Pembe-Mor
            { stem: '#05d9e8', petals: '#00ff9d', glow: '#00ff9d' }  // Yeşil-Mavi
        ];
        
        for (let i = 0; i < flowerCount; i++) {
            const flower = document.createElement('div');
            flower.className = 'tech-flower';
            flower.style.animationDelay = `${i * 0.3}s`;
            
            const colorSet = colors[i % colors.length];
            
            // Sap
            const stem = document.createElement('div');
            stem.className = 'flower-stem';
            stem.style.height = `${120 + Math.random() * 80}px`;
            stem.style.background = `linear-gradient(to top, ${colorSet.stem}, #${Math.floor(Math.random()*16777215).toString(16)})`;
            
            // Çiçek başı
            const core = document.createElement('div');
            core.className = 'flower-core';
            
            // Taç yapraklar
            const petalCount = 8;
            for (let j = 0; j < petalCount; j++) {
                const petal = document.createElement('div');
                petal.className = 'petal';
                const angle = (j * 360) / petalCount;
                petal.style.background = `linear-gradient(45deg, ${colorSet.petals}, ${colorSet.stem})`;
                petal.style.transform = `translate(-50%, -50%) rotate(${angle}deg) translateY(-20px)`;
                petal.style.boxShadow = `0 0 10px ${colorSet.glow}`;
                core.appendChild(petal);
            }
            
            // Merkez
            const center = document.createElement('div');
            center.className = 'core-center';
            
            // Yapraklar (binary kod şeklinde)
            for (let k = 0; k < 2; k++) {
                const leaf = document.createElement('div');
                leaf.className = 'binary-leaf';
                leaf.style.position = 'absolute';
                leaf.style.width = '20px';
                leaf.style.height = '8px';
                leaf.style.background = colorSet.stem;
                leaf.style.borderRadius = '4px';
                leaf.style.top = `${30 + k * 40}px`;
                leaf.style.left = k === 0 ? '-15px' : 'initial';
                leaf.style.right = k === 1 ? '-15px' : 'initial';
                leaf.style.transform = `rotate(${k === 0 ? '-45deg' : '45deg'})`;
                leaf.innerHTML = `<span style="font-size:6px;color:#000">${Math.random() > 0.5 ? '1' : '0'}</span>`;
                stem.appendChild(leaf);
            }
            
            core.appendChild(center);
            flower.appendChild(stem);
            flower.appendChild(core);
            container.appendChild(flower);
        }
    }
    
    // Arka plan parçacıkları
    function createParticles() {
        const particlesContainer = document.getElementById('particles');
        const particleCount = 50;
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.style.position = 'absolute';
            particle.style.width = `${Math.random() * 3 + 1}px`;
            particle.style.height = particle.style.width;
            particle.style.background = i % 3 === 0 ? '#8a2be2' : 
                                       i % 3 === 1 ? '#05d9e8' : '#ff2a6d';
            particle.style.borderRadius = '50%';
            particle.style.left = `${Math.random() * 100}vw`;
            particle.style.top = `${Math.random() * 100}vh`;
            particle.style.opacity = Math.random() * 0.5 + 0.1;
            
            // Hareket animasyonu
            const duration = 20 + Math.random() * 30;
            particle.style.animation = `float ${duration}s linear infinite`;
            
            particlesContainer.appendChild(particle);
        }
        
        // CSS animasyonunu ekle
        const style = document.createElement('style');
        style.textContent = `
            @keyframes float {
                0%, 100% {
                    transform: translate(0, 0);
                }
                25% {
                    transform: translate(${Math.random() * 50 - 25}px, ${Math.random() * 50 - 25}px);
                }
                50% {
                    transform: translate(${Math.random() * 50 - 25}px, ${Math.random() * 50 - 25}px);
                }
                75% {
                    transform: translate(${Math.random() * 50 - 25}px, ${Math.random() * 50 - 25}px);
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Binary kod yağmuru
    function createBinaryRain() {
        const rainContainer = document.querySelector('.binary-rain');
        const binaryCount = 50;
        
        for (let i = 0; i < binaryCount; i++) {
            const binary = document.createElement('div');
            binary.style.position = 'absolute';
            binary.style.color = i % 2 === 0 ? '#05d9e8' : '#8a2be2';
            binary.style.fontSize = `${Math.random() * 12 + 8}px`;
            binary.style.fontFamily = 'JetBrains Mono, monospace';
            binary.style.opacity = '0.1';
            binary.style.left = `${Math.random() * 100}%`;
            binary.style.top = '-50px';
            binary.textContent = Math.random() > 0.5 ? '1' : '0';
            
            // Düşme animasyonu
            const duration = 3 + Math.random() * 7;
            const delay = Math.random() * 5;
            binary.style.animation = `fall ${duration}s linear ${delay}s infinite`;
            
            rainContainer.appendChild(binary);
        }
        
        // Fall animasyonunu ekle
        if (!document.querySelector('#binaryAnimation')) {
            const style = document.createElement('style');
            style.id = 'binaryAnimation';
            style.textContent = `
                @keyframes fall {
                    0% {
                        transform: translateY(0) rotate(0deg);
                        opacity: 0.1;
                    }
                    100% {
                        transform: translateY(100vh) rotate(360deg);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(style);
        }
    }
    
    // Tıklama efekti
    document.addEventListener('click', function(e) {
        createClickEffect(e.clientX, e.clientY);
    });
    
    function createClickEffect(x, y) {
        const colors = ['#8a2be2', '#05d9e8', '#ff2a6d', '#00ff9d'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        const effect = document.createElement('div');
        effect.style.position = 'fixed';
        effect.style.left = `${x}px`;
        effect.style.top = `${y}px`;
        effect.style.width = '0';
        effect.style.height = '0';
        effect.style.borderRadius = '50%';
        effect.style.background = `radial-gradient(circle, ${color}, transparent)`;
        effect.style.zIndex = '1000';
        effect.style.pointerEvents = 'none';
        effect.style.transform = 'translate(-50%, -50%)';
        
        document.body.appendChild(effect);
        
        // Animasyon
        effect.animate([
            { width: '0px', height: '0px', opacity: 1 },
            { width: '100px', height: '100px', opacity: 0 }
        ], {
            duration: 800,
            easing: 'ease-out'
        });
        
        // Temizle
        setTimeout(() => effect.remove(), 800);
    }
    
    // Sayfa yüklendiğinde konsola mesaj
    console.log('%c❤️ Ahmet loves Berra ❤️', 'color: #ff2a6d; font-size: 20px; font-weight: bold;');
    console.log('%cSite successfully compiled with eternal love!', 'color: #05d9e8;');
});
