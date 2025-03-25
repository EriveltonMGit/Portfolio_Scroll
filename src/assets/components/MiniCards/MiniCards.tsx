
// IMPORT CSS 
import './MiniCards.css'
// IMPORT ICONS 
import { MdScreenshotMonitor } from "react-icons/md";
import { MdWebStories } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import { FaCode } from "react-icons/fa";

function MiniCards() {

    const items = [
        {id:1, image:< MdScreenshotMonitor className='icon_mini_cards'/>, name:"INTERFACE", description:"Experiência em criar interfaces interativas e dinâmicas utilizando React e Angular"},
        {id:2, image:< MdWebStories className='icon_mini_cards'/>, name:"LANDING PAGE", description:"Páginas personalizadas, com design atraente e otimizado para conversões."},
        {id:3, image:<CgWebsite className='icon_mini_cards'/>, name:"UX/UI", description:"Interfaces intuitivas e funcionais com foco na experiência do usuário."},
        {id:4, image:<FaCode className='icon_mini_cards'/>, name:"DESENVOLVIMENTO", description:"Criação de sites e aplicações web responsivas e escaláveis."},
    ]
    return ( 
    
    <>
    
    <main className='container_mini_cards ' >
      
      {
        items.map((item)=>(
            <div className='item-body  ' key={item.id}  >
               {item.image }
               <h3>{item.name}</h3>
               <p>{item.description}</p>

            </div>
        ))
      }

    </main>
    
    
    
    
    </>
    

);
}

export default MiniCards;