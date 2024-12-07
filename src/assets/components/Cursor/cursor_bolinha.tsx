import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import './cursor.css';

const BolinhaSeguindoMouse = () => {
  const [posicao, setPosicao] = useState({ x: 0, y: 0 });
  const [cursorSize, setCursorSize] = useState(15); // Tamanho inicial da bolinha
  const cursorRef = useRef<HTMLDivElement | null>(null); // Referência para a bolinha
  const [cursorColor] = useState('#b3e9e7'); // Cor padrão do cursor

  // Atualiza posição da bolinha com base no movimento do mouse
  useEffect(() => {
    const moverBolinha = (e: MouseEvent) => {
      setPosicao({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', moverBolinha);

    return () => {
      window.removeEventListener('mousemove', moverBolinha);
    };
  }, []);

  // Efeitos para links, botões e áreas especiais
  useEffect(() => {
    const links = document.querySelectorAll('a');
    const buttonsCustom = document.querySelectorAll('.button-custom'); // Botões personalizados
    const areasEspeciais = document.querySelectorAll('.area-especial'); // Áreas especiais

    // Eventos para links
    links.forEach(link => {
      link.addEventListener('mouseover', () => {
        gsap.to('.cursor_', {
          scale: 2,
          backgroundColor: '#b3e9e7',
          filter: 'blur(4px)', // Adiciona blur
          duration: 0.4,
        });
        setCursorSize(10);
      });

      link.addEventListener('mouseleave', () => {
        gsap.to('.cursor_', {
          scale: 1,
          backgroundColor: cursorColor,
          filter: 'blur(0px)', // Remove blur
          duration: 0.4,
        });
        setCursorSize(15);
      });
    });

    // Eventos para botões personalizados
    buttonsCustom.forEach(button => {
      button.addEventListener('mouseover', () => {
        gsap.to('.cursor_', {
          scale: 2.5,
          backgroundColor: '#b3e9e7',
          filter: 'blur(6px)', // Blur mais intenso
          duration: 0.4,
        });
        setCursorSize(50);
      });

      button.addEventListener('mouseleave', () => {
        gsap.to('.cursor_', {
          scale: 1,
          backgroundColor: cursorColor,
          filter: 'blur(0px)', // Remove blur
          duration: 0.4,
        });
        setCursorSize(15);
      });
    });

    // Eventos para áreas especiais
    areasEspeciais.forEach(area => {
      area.addEventListener('mouseover', () => {
        gsap.to('.cursor_', {
          scale: 3,
          backgroundColor: '#b3e9e7',
          filter: 'blur(8px)', // Blur mais intenso
          duration: 0.4,
        });
        setCursorSize(50);
      });

      area.addEventListener('mouseleave', () => {
        gsap.to('.cursor_', {
          scale: 1,
          backgroundColor: cursorColor,
          filter: 'blur(0px)', // Remove blur
          duration: 0.4,
        });
        setCursorSize(15);
      });
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener('mouseover', () => {});
        link.removeEventListener('mouseleave', () => {});
      });
      buttonsCustom.forEach(button => {
        button.removeEventListener('mouseover', () => {});
        button.removeEventListener('mouseleave', () => {});
      });
      areasEspeciais.forEach(area => {
        area.removeEventListener('mouseover', () => {});
        area.removeEventListener('mouseleave', () => {});
      });
    };
  }, [cursorColor]);

  // Atualiza a posição e tamanho do cursor
  useEffect(() => {
    if (cursorRef.current) {
      const { x, y } = posicao;
      cursorRef.current.style.left = `${x - cursorSize / 4}px`; // Ajuste horizontal
      cursorRef.current.style.top = `${y - cursorSize / 4}px`; // Ajuste vertical
      cursorRef.current.style.width = `${cursorSize}px`;
      cursorRef.current.style.height = `${cursorSize}px`;
    }
  }, [posicao, cursorSize]);

  return (
    <div
      ref={cursorRef}
      className="cursor_"
      style={{
        position: 'fixed',
        zIndex: 3000,
        borderRadius: '50%',
        backgroundColor: cursorColor,
        pointerEvents: 'none',
        transition: 'background-color 0.4s, width 0.4s, height 0.4s, filter 0.4s', // Inclui filtro na transição
      }}
    />
  );
};

export default BolinhaSeguindoMouse;
