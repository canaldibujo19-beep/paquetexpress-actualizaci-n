// Interactividad y validaciones básicas para el frontend estático
document.addEventListener('DOMContentLoaded', function(){
  window.calcularCotizacion = function(e){
    e.preventDefault();
    const peso = parseFloat(document.getElementById('peso').value) || 0.1;
    const origen = document.getElementById('origen').value || '';
    const destino = document.getElementById('destino').value || '';
    // Simple pricing logic (orientative)
    const base = 100;
    const pesoCost = peso * 12;
    const express = Math.round((base + pesoCost) * 1.8);
    const standard = Math.round((base + pesoCost) * 1.0);
    const local = Math.round((base + pesoCost) * 1.4);

    const tbody = document.getElementById('tablaBody');
    tbody.innerHTML = '';
    const rows = [
      ['Paquetería Estándar','3-5 días', '$' + standard + ' MXN'],
      ['Paquetería Express','24-48 horas', '$' + express + ' MXN'],
      ['Mensajería Local','Mismo día', '$' + local + ' MXN']
    ];
    rows.forEach(r=>{
      const tr = document.createElement('tr');
      tr.innerHTML = '<td>'+r[0]+'</td><td>'+r[1]+'</td><td>'+r[2]+'</td>';
      tbody.appendChild(tr);
    });
    document.getElementById('resultado').classList.remove('hidden');
    return false;
  };

  window.buscarGuia = function(e){
    e.preventDefault();
    const guia = document.getElementById('guia').value.trim();
    const out = document.getElementById('estadoResultado');
    if(!guia){ out.innerText = 'Ingrese un número de guía válido.'; out.classList.remove('hidden'); return false; }
    // Simulación simple de estados
    const estados = [
      'En tránsito - Salió de almacén origen',
      'En ruta - En camino a centro de distribución',
      'En reparto - Repartidor asignado',
      'Entregado'
    ];
    const idx = (guia.length % estados.length);
    out.innerHTML = '<strong>Guía:</strong> '+guia+'<br><strong>Estado:</strong> '+estados[idx];
    out.classList.remove('hidden');
    return false;
  };

  window.validarContacto = function(e){
    e.preventDefault();
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();
    if(!nombre || !email || !mensaje){
      alert('Por favor completa Nombre, Email y Mensaje.');
      return false;
    }
    alert('Mensaje enviado (simulación). Gracias, ' + nombre + '.');
    document.getElementById('contactForm').reset();
    return false;
  };
});
