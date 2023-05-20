
import React from 'react';

export default function Bib({bib, page, type, inline=false}) {
  let base = {
    ['tanenbaum_2011_book']: {['cite']: 'TANENBAUM 2011', ['abnt']:'TANENBAUM, A.S., Wetherall, D. Redes de Computadores. 5. ed. São Paulo: Pearson do Brasil, 2011.'},
    ['kurose_2013_book']   : {['cite']: 'KUROSE 2013', ['abnt']:'KUROSE, Jim; ROSS, Keith W. Redes de computadores e a internet: uma abordagem top-down. 6.ed. São Paulo: Pearson, 2013. ISBN 9788581436777.'},
    ['torres_2009_book']: {['cite']: 'TORRES 2009', ['abnt']:'TORRES, G. Redes de Computadores. Rio de Janeiro: Novaterra, 2009. ISBN 978-85-61893-05-7.'},
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