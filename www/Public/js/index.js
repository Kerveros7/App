var app ={
    // Application Constructor
  initialize: function(){
      document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
  },

  onDeviceReady: function(){
      this.receivedEvent('deviceready');
  },

  receivedEvent: function(id){
      // var parentElement = document.getElementById(id);
      // var listeningElement = parentElement.querySelector('.listening');
      // var receivedElement = parentElement.querySelector('.received');
      //
      // listeningElement.setAttribute('style', 'display:none;');
      // receivedElement.setAttribute('style', 'display:block;');
      //
      // console.log('Received Event: ' + id);
    $('#btnLanzarAlerta').on('click', this.onClickBtnLanzarAlerta);
    $('#btnSobreEscribirCuerpo').on('click',this.onClickBtnSobreEscribirCuerpo);
    $('#txtTexto').on('focus', this.onFocusTxtTexto);
    $('#txtTexto').on('blur', this.onBlurTxtTexto);
    $('#txtTexto').on('txtTexto', this.onKeyUpTxtTexto);
    $('#selectPais').on('change', this.onChangeSelectPais);
  },

  onClickBtnLanzarAlerta: function(){
    window.sqlitePlugin.echoTest(function(){
      alert('test SQlite correcto.');
    });
  },
  onClickBtnSobreEscribirCuerpo: function(){
    $('#sectionCuerpoGeneral').html('https://www.google.es');
  },
  onFocusTxtTexto: function(){
    // alert('se puso el foco sobre el control de texto');
  },
  onBlurTxtTexto: function(){
    // alert('se perdio el foco del control de texto');
  },
  onKeyUpTxtTexto: function(){
    $('#sectionCuerpoGeneral').html('txtTexto').val();
  },
  onChangeSelectPais: function(){
    $('#sectionCuerpoGeneral').html($('#selectPais').val());
  }
};
app.initialize();

  // minuto 18:36 video 5
