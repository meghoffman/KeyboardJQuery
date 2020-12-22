$(document).ready(() => {
    $('button').on('mouseenter', (event)=> {
     $(event.currentTarget).css({
       backgroundColor: 'gray',
       color: 'white'
     });
    })
    $('button').on('mouseleave', (event)=> {
     $(event.currentTarget).css({
       backgroundColor: 'azure',
       color: 'black'
     });
    })
  
    $('#save').on('click', ()=> {
    $('#answer').appendTo("#saved");
    })
    $('#a').on('click', ()=>{
      $('#answer').append('<p>A</p>');
    })
    $('#b').on('click', ()=>{
      $('#answer').append('<p>B</p>');
    })
     $('#c').on('click', ()=>{
      $('#answer').append('<p>C</p>');
    })
    $('#d').on('click', ()=>{
      $('#answer').append('<p>D</p>');
    })
     $('#e').on('click', ()=>{
      $('#answer').append('<p>E</p>');
    })
    $('#f').on('click', ()=>{
      $('#answer').append('<p>F</p>');
    })
     $('#g').on('click', ()=>{
      $('#answer').append('<p>G</p>');
    })
    $('#h').on('click', ()=>{
      $('#answer').append('<p>H</p>');
    })
     $('#i').on('click', ()=>{
      $('#answer').append('<p>I</p>');
    })
    $('#j').on('click', ()=>{
      $('#answer').append('<p>J</p>');
    })
     $('#k').on('click', ()=>{
      $('#answer').append('<p>K</p>');
    })
    $('#l').on('click', ()=>{
      $('#answer').append('<p>L</p>');
    })
     $('#m').on('click', ()=>{
      $('#answer').append('<p>M</p>');
    })
    $('#n').on('click', ()=>{
      $('#answer').append('<p>N</p>');
    })
     $('#o').on('click', ()=>{
      $('#answer').append('<p>O</p>');
    })
    $('#p').on('click', ()=>{
      $('#answer').append('<p>P</p>');
    })
     $('#q').on('click', ()=>{
      $('#answer').append('<p>Q</p>');
    })
    $('#r').on('click', ()=>{
      $('#answer').append('<p>R</p>');
    })
     $('#s').on('click', ()=>{
      $('#answer').append('<p>S</p>');
    })
    $('#t').on('click', ()=>{
      $('#answer').append('<p>T</p>');
    })
     $('#u').on('click', ()=>{
      $('#answer').append('<p>U</p>');
    })
    $('#v').on('click', ()=>{
      $('#answer').append('<p>V</p>');
    })
     $('#w').on('click', ()=>{
      $('#answer').append('<p>W</p>');
    })
    $('#x').on('click', ()=>{
      $('#answer').append('<p>X</p>');
    })
     $('#y').on('click', ()=>{
      $('#answer').append('<p>Y</p>');
    })
    $('#z').on('click', ()=>{
      $('#answer').append('<p>Z</p>');
    })
    $('#space').on('click', ()=>{
      $('#answer').append('<p id = "spacer">_</p>');
    })
    $('#clear').on('click', ()=>{
      $('#answer').empty();
  });
  
  
  
  });
  