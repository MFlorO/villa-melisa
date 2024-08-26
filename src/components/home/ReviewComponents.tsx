"use client";
import { Flex } from "@chakra-ui/react";
import { useEffect } from "react";

const ReviewComponents = () => {

  useEffect(() => {
    // Función para cargar el script
    const loadScript = () => {
      const scriptId = 'EmbedSocialHashtagScript';
      if (!document.getElementById(scriptId)) {
        const script = document.createElement('script');
        script.id = scriptId;
        script.src = 'https://embedsocial.com/cdn/ht.js';
        document.head.appendChild(script);
      }
    };

    loadScript();
  }, []);

  return (
    <Flex w="100%" h='min-height' justifyContent='center' alignItems={{base:'start', md:'center'}} bgColor='bgColor' id="review" 
      overflow='hidden' // Asegura que el contenido no sobresalga
      position='relative' // Asegura que el posicionamiento del contenido sea relativo al contenedor
    >
      <Flex w="100%" h="90%" p="20px" alignItems='center' justifyContent='center' 
        position='relative' // Permite el ajuste del contenido interno
      >
        <div className="embedsocial-hashtag" data-ref="432cc25c3eaea6be3309b174d6016d47bf155874"
          style={{ width: '90%', height: '90%' }} // Ajusta el widget al tamaño del contenedor
        >
          <a
            className="feed-powered-by-es feed-powered-by-es-feed-img"
            href="https://embedsocial.com/blog/embed-google-reviews/"
            target="_blank"
            rel="noopener noreferrer"
            title="Embed Google reviews"
          > 
            <img src="https://embedsocial.com/cdn/images/embedsocial-icon.png" alt="EmbedSocial" />
          </a>
        </div>
      </Flex>
    </Flex>
  );
};

export default ReviewComponents;
