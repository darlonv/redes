
import React from 'react';

export default function Bib({bib, page, type, inline=false}) {
  let base = {
    ['tanenbaum_2011']: {['cite']: 'TANENBAUM 2011', ['abnt']:'TANENBAUM, A.S., Wetherall, D. Redes de Computadores. 5. ed. São Paulo: Pearson do Brasil, 2011.'}
  }

  let data;

  
  if(!type){
    //citação
    if(!page){
      //sem página
      data = base[bib]['cite'];
    }
    else{
      //com página
      data = base[bib]['cite']+', pg. '+page;
    }
    
    if(!inline){
      //coloca parênteses antes e depois
      data = '('+data+')';
    }
    
  }else{
    //referência
    data = base[bib][type]

  }
  
    return (
      <>
        {data}
      </>
    );
  }