[English](README.md) | [简体中文](README.zh-CN.md) | [Español](README.es.md) | [Português (Brasil)](README.pt-BR.md) | [日本語](README.ja.md)

# 🎃 Pumpkin Shift — Puzle deslizante de números para Halloween

**La mansión está tranquila. Sus calabazas numeradas tienen otros planes.** Pumpkin Shift es un puzle de Halloween creado para [2048 Online](https://2048online.top/). Ordena las piezas, reserva un poco de luz lunar para un atajo y descubre doce habitaciones y un reto diario. Los clásicos puzles de ocho y quince piezas incorporan dos deslizamientos lunares por habitación.

**[Jugar ahora](https://halloween-pumpkin-shift.crazy3d.org/)** · [Colección de Halloween](https://github.com/AshinTop/halloween-games) · [Guía de integración](EMBEDDING.md) · [Notas de diseño](DESIGN.md)

**Idiomas de la documentación:** English, 简体中文, Español, Português (Brasil), 日本語. **Interfaz del juego:** solo inglés y chino simplificado. Los otros idiomas del README no implican una traducción de los menús del juego.

![Puzle de Halloween Pumpkin Shift con números, una casilla vacía y contadores de deslizamientos lunares](docs/images/gameplay.jpg)

## Pequeños descubrimientos en la mansión 👻

- **12 habitaciones:** ocho tableros de 3×3 y cuatro de 4×4.
- Dos deslizamientos lunares por habitación, movimientos normales ilimitados y una función de deshacer que devuelve la magia gastada.
- Un puzle diario de 3×3 reproducible a partir de la fecha UTC.
- Piezas bien colocadas en verde, objetivos de movimientos, estrellas, sonido opcional e ilustraciones originales.
- Pistas de ruta, selección de habitación y guardado local para jugar con calma.

## Cómo jugar

Coloca los números en orden ascendente, de izquierda a derecha y de arriba abajo, con el hueco en la esquina inferior derecha. Las piezas se desplazan hacia el hueco; no se fusionan.

Tocar una pieza contigua produce un movimiento normal. Para un **deslizamiento lunar**, toca una pieza más alejada en la misma fila o columna. Toda la línea intermedia avanza hacia el hueco. Cuenta como un movimiento y consume uno de los dos deslizamientos disponibles. No hay movimientos diagonales.

Las flechas del teclado y los botones de dirección mueven el **hueco**. Por eso la pieza parece desplazarse en sentido contrario. Toca directamente una pieza cuando quieras elegir un movimiento concreto.

No hay cuenta atrás ni límite obligatorio de movimientos. Las estrellas premian la eficiencia, pero puedes terminar aunque superes el objetivo. Los objetivos de la campaña cuentan con rutas de solución verificadas; la ruta inversa del mezclado diario permite alcanzar su objetivo sin magia.

## Controles

| Acción | Ratón o pantalla táctil | Teclado |
|---|---|---|
| Mover una pieza contigua | Tocar la pieza | Flechas para mover el hueco |
| Deslizamiento lunar | Tocar una pieza alineada más lejana | Enfocar la pieza y activarla |
| Deshacer | Botón de deshacer | Z |
| Consultar la ruta | Botón de pista | Tab hasta el botón |
| Reiniciar o cambiar habitación | Reinicio, selector, anterior / siguiente | Tab y Enter |

**La pista ofrece una ruta segura, no la solución más corta.** Puede deshacer tus desvíos y después recorrer al revés la mezcla inicial. Pedirla no mueve ninguna pieza ni consume un turno.

## Reto diario y progreso

Los tableros se generan mediante movimientos legales desde la posición resuelta, así que tienen solución. La [habitación 9](https://halloween-pumpkin-shift.crazy3d.org/?level=9) inicia el capítulo de 4×4. El [reto de hoy](https://halloween-pumpkin-shift.crazy3d.org/?mode=daily) utiliza UTC; un [enlace con fecha](https://halloween-pumpkin-shift.crazy3d.org/?mode=daily&date=2026-10-31) conserva ese día.

El tablero actual, las mejores marcas, las estrellas y las preferencias se guardan en el navegador. Recargar puede recuperar la partida si el enlace no solicita otra. El historial para deshacer solo dura durante la sesión.

## Preguntas frecuentes

**¿Se juega como 2048?** No: es un puzle deslizante. Los números iguales nunca se combinan.

**¿Qué pasa si gasto los dos deslizamientos?** Puedes seguir con movimientos normales. Deshacer recupera magia; reiniciar devuelve el tablero inicial.

**¿Por qué la pista me hace retroceder?** Sigue una ruta conocida y segura, sin prometer que cada paso forme parte de la solución óptima.

## Imágenes y vídeo

![Pumpkin Shift en una ventana compacta con tablero, botones de dirección y control para deshacer](docs/images/mobile.jpg)

Interfaz real capturada en un iframe compacto del navegador. Ilustra la distribución de los controles; no es una prueba de rendimiento en un teléfono físico.

[Ver la introducción de 24 segundos](https://halloween-pumpkin-shift.crazy3d.org/intro.html) · [Descargar el MP4 con subtítulos](docs/media/intro.mp4). Este vídeo silencioso está montado con capturas reales del juego, no con una partida grabada de forma continua. Las imágenes reflejan la interfaz del momento de la captura y pueden ser anteriores a mejoras visuales posteriores.

## Añádelo a tu sitio

```html
<iframe src="https://halloween-pumpkin-shift.crazy3d.org/"
  title="Pumpkin Shift"
  style="display:block;width:100%;height:654px;border:0"
  allow="fullscreen" allowfullscreen></iframe>
```

El diseño contempla ventanas iframe de 1160×654 en escritorio, 390×650 en vertical y 844×340 en horizontal. No requiere un parámetro especial de inserción. Ajusta la altura al espacio real que deja la barra del sitio anfitrión.

La versión en línea se publica en Cloudflare desde este repositorio de GitHub. Asigna una altura real al iframe y deja espacio para la barra del sitio anfitrión. El sitio puede ofrecer pantalla completa. Consulta [EMBEDDING.md](EMBEDDING.md) para los detalles.

## Ejecutar y comprobar en local

```sh
python3 -m http.server 4173
```

Sirve la raíz del repositorio y abre [http://localhost:4173/](http://localhost:4173/). Es un juego estático, sin compilación ni instalación de dependencias. Usa HTTP(S): abrirlo mediante `file://` puede bloquear los módulos JavaScript. Las pruebas requieren Node.js.

```sh
npm test
```

Las **11 pruebas** cubren soluciones y objetivos de campaña, generación diaria, coste y agotamiento de los deslizamientos, pistas tras desvíos, límites del tablero, enlaces fechados y validación de partidas guardadas.

El código del juego no necesita cuentas, API remotas, SDK publicitarios ni una CDN de recursos externos. Los registros se guardan en el navegador, sin sincronización en la nube. Cloudflare puede añadir scripts de alojamiento y registros de solicitudes. El sonido sintetizado opcional respeta los permisos del navegador.

## Más aventuras a la luz de la luna 🍬

- [Pumpkin 2048](https://halloween-2048.crazy3d.org/) · [Código](https://github.com/AshinTop/halloween-2048) — Fusiones clásicas y Lantern Trials.
- [Ghost Lanterns 3D](https://halloween-3d.crazy3d.org/) · [Código](https://github.com/AshinTop/halloween-3d) — Lights Out espacial con faroles enlazados.
- [Haunted Hearts](https://halloween-love-game.crazy3d.org/) · [Código](https://github.com/AshinTop/halloween-love-game) — Dos fantasmas, compuertas y una linterna compartida.
- [Trick-or-Treat TriPeaks](https://halloween-tripeaks.crazy3d.org/) · [Código](https://github.com/AshinTop/halloween-tripeaks) — Solitario de rangos vecinos y Moon Bridges.

## Créditos y apoyo

Creado para **Midnight Candy Club de AshinTop** mediante colaboración con IA dirigida por personas en diseño, programación, documentación, pruebas y revisión. Las ilustraciones originales y los sonidos sintetizados se hicieron para este proyecto. Consulta las [notas de diseño](DESIGN.md).

¿Te gustó esta pequeña aventura? **[Dale una estrella a Pumpkin Shift en GitHub](https://github.com/AshinTop/halloween-pumpkin-shift)** para encontrarlo después y seguir las novedades. Al informar de un problema, incluye nivel o modo, navegador, tamaño de ventana y pasos para reproducirlo. Descubre la [colección completa de Halloween](https://github.com/AshinTop/halloween-games).
