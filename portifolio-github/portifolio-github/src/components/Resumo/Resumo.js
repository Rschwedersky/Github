import PropTypes from "prop-types";
import styles from "./Resumo.module.css"
export const Resumo = ({img, name}) => {
   
   return (<div className={styles.conteiner}>
      <img className={styles.img} src={img} alt={name} />
      <h2 className={styles.h2}>Vejo a tecnologia como uma ferramenta poderosa para solução de problemas. Na minha formação acadêmica tive experiência na utilização de programas para biologia molecular desenvolvidos em Python. Nesse mesmo período empreendi com uma marca de ração canina e apliquei conceitos de HTML, CSS e JavaScript na criação da página Web da empresa. Atualmente empreendo no cultivo de cogumelos e desenvolvo soluções para automação do processo com microcontroladores programados em C++ e front-end em HTML,CSS e JavaScript. Nessa jornada procurei uma estrutura nos estudos e entrei na seleção para o curso Devinhouse. O curso trouxe uma experiência ainda mais prazerosa com a programação e o aprendizado de tecnologias como o Git, React e APIs. Estou disposto a desenvolver e aprender ainda mais essas tecnologias, que produzem tanto valor para a sociedade.
</h2>
      </div>)
  };

  Resumo.propTypes = {
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  };
  