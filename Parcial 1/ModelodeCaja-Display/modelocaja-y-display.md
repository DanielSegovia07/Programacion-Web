Daniel Segovia Espinoza 
N.C. 21100291   
26/08/2023
# **Modelo de caja**
El **modelo de caja** en HTML y CSS se refiere a cómo se estructura y presenta un elemento HTML en una página web. Cada elemento HTML, como un párrafo, una imagen o un cuadro de texto, se representa visualmente como una caja en la pantalla. El modelo de caja describe cómo se calculan y distribuyen el tamaño, el espacio y los márgenes alrededor de estos elementos.    

En CSS, en general, hay dos tipos de cajas: 
1. cajas en bloque  
2. cajas en línea.   

Estas características se refieren al modo como se comporta la caja en términos de flujo de página y en relación con otras cajas de la página:

| **Caja en bloque**   |  **Caja en linea**  |
|----------------------|---------------------|
|La caja fuerza un salto de línea al llegar al final de la línea.|La caja no fuerza ningún salto de línea al llegar al final de la línea.|
|La caja se extenderá en la dirección de la línea para llenar todo el espacio disponible que haya en su contenedor. En la mayoría de los casos, esto significa que la caja será tan ancha como su contenedor, y llenará el 100% del espacio disponible.| Las propiedades width y height no se aplican.|
|Se respetan las propiedades width y height.|Se aplican relleno, margen y bordes verticales, pero no mantienen alejadas otras cajas en línea.|
|El relleno, el margen y el borde mantienen a los otros elementos alejados de la caja.|Se aplican relleno, margen y bordes horizontales, y mantienen alejadas otras cajas en línea.|
  
  El tipo de caja que se aplica a un elemento está definido por los valores de propiedad display, como block y inline, y se relaciona con el valor externo (outer) de visualización (display).  

## **Partes que componen una caja**
Las partes que componen cada caja y su orden de visualización desde el punto de vista del usuario son las siguientes:

1. Contenido (content): se trata del contenido HTML del elemento (las palabras de un párrafo, una imagen, el texto de una lista de elementos, etc.)
2. Relleno (padding): espacio libre opcional existente entre el contenido y el borde.
3. Borde (border): línea que encierra completamente el contenido y su relleno.
4. Imagen de fondo (background image): imagen que se muestra por detrás del contenido y el espacio de relleno.
5. Color de fondo (background color): color que se muestra por detrás del contenido y el espacio de relleno.
6. Margen (margin): separación opcional existente entre la caja y el resto de cajas adyacentes.  

![caja imagen ](https://www.arkaitzgarro.com/css2/images/cap04/boxmodel_2d.png)

El relleno y el margen son transparentes, por lo que en el espacio ocupado por el relleno se muestra el color o imagen de fondo (si están definidos) y en el espacio ocupado por el margen se muestra el color o imagen de fondo de su elemento padre (si están definidos). Si ningún elemento padre tiene definido un color o imagen de fondo, se muestra el color o imagen de fondo de la propia página (si están definidos).

Si una caja define tanto un color como una imagen de fondo, la imagen tiene más prioridad y es la que se visualiza. No obstante, si la imagen de fondo no cubre totalmente la caja del elemento o si la imagen tiene zonas transparentes, también se visualiza el color de fondo. Combinando imagenes transparentes y colores de fondo se pueden lograr efectos gráficos muy interesantes.

# **Propiedad Display**  
La propiedad CSS display especifica si un elemento es tratado como block or inline element y el diseño usado por sus hijos, como flow layout(Diseño de Flujo), grid(Cuadricula) o flex(Flexible).

La propiedad display se especifica mediante valores de palabras clave. Los valores de palabras clave se agrupan en seis categorías:

### **display-outside**
Estas palabras clave especifican el tipo de pantalla externa del elemento, que es esencialmente su función en el diseño de flujo: A continuación se definen:  

| **Valor** | **Descripción** |
|-----------|-----------------|
| block| El elemento genera un cuadro de elemento de bloque.|
| inline| El elemento genera uno o más cuadros de elemento en línea.|
|run-in|El elemento genera un cuadro de ejecución. Los elementos de ejecución actúan como líneas o bloques, dependiendo de los elementos circundantes. Es decir: Si el cuadro de ejecución contiene un cuadro de bloque, igual que el bloque. Si un cuadro de bloque sigue el cuadro de ejecución, el cuadro de ejecución se convierte en el primer cuadro en línea del cuadro de bloque. Si sigue un cuadro en línea, el cuadro de ejecución se convierte en un cuadro de bloque.|  

### **display-inside**
Estas palabras clave especifican el tipo de pantalla interna del elemento, que define el tipo de contexto de formato que establece su contenido (suponiendo que es un elemento no reemplazado). Se definen como sigue:
| **Valor** | **Descripción** |
|-----------|-----------------|
|flow|El elemento expone su contenido utilizando el diseño de flujo (diseño en bloque y en línea).Si su tipo de pantalla externa es inline o run-in, y está participando en un contexto de formato de bloque o en línea, entonces genera un cuadro en línea. De lo contrario genera una caja de contenedor de bloques.Dependiendo del valor de otras propiedades como position, float o overflow en un contexto de formato en bloque o en línea, establece un nuevo contexto de formato de bloque para su contenido o integra su contenido en su contexto de formato padre.|
|flow-root|El elemento genera un cuadro de elemento de bloque que establece un nuevo contexto de formato de bloque .|
|table|Estos elementos se comportan como elementos HTML `<table>`. Define un cuadro de nivel de bloque.|
|flex|El elemento se comporta como un elemento de bloque y establece su contenido de acuerdo con el modelo de flexbox .|
|grid|El elemento se comporta como un elemento de bloque y establece su contenido de acuerdo con el modelo de cuadrícula.|
|subgrid|Si el elemento padre tiene display:grid, el elemento en sí y su contenido se establecen de acuerdo con el modelo de cuadrícula.|
|ruby|El elemento se comporta como un elemento en línea y establece su contenido de acuerdo con el modelo de formato ruby. Se comporta como los elementos HTML `<ruby>` correspondientes.|  

### **display-listitem**
El elemento genera un cuadro de bloque para el contenido y un cuadro en línea de elemento de lista independiente.

Si no se especifica ningún valor **display-inside**, el tipo de pantalla interna de la caja principal es el predeterminado flow. Si no se especifica ningún valor **display-outside**, el tipo de pantalla externa de la caja principal tiene el valor predeterminado block.

### **display-internal**
Algunos modelos de disposición, como table y ruby, tienen una estructura interna completa, con varios papeles diferentes que sus hijos y descendientes pueden llenar. Esta sección define los valores de visualización "internos", que sólo tienen significado dentro de ese modo de disposición particular.

A menos que se especifique lo contrario, el tipo de visualización interno y el tipo de visualización exterior de los elementos que utilizan estos valores de visualización se establecen en la palabra clave dada.

| **Valor** | **Descripción** |
|-----------|-----------------|
|table-row-group|Estos elementos se comportan como `<tbody>` Elementos HTML|
|table-header-group|Estos elementos se comportan como elementos HTML de `<thead>`.|
|table-footer-group|Estos elementos se comportan como elementos HTML `<tfoot>`|
|table-row|Estos elementos se comportan como elementos HTML `<tr>`|
|table-cell|Estos elementos se comportan como elementos HTML de `<td>`.|
|table-column-group|Estos elementos se comportan como elementos HTML `<colgroup>`.|
|table-column|Estos elementos se comportan como elementos HTML `<col>`.|
|table-caption|Estos elementos se comportan como elementos HTML de `<caption>`.|
|ruby-base|Estos elementos se comportan como elementos `<rb>`. |
|ruby-text |Estos elementos se comportan como elementos `<rt>`.|
|ruby-base-container | Estos elementos se comportan como elementos `<rbc>` generados como cajas anónimas.|
|ruby-text-container|Estos elementos se comportan como elementos `<rtc>`|  

### **display-box**
Estos valores se definen si un elemento genera cuadros de visualización en absoluto.
| **Valor** | **Descripción** |
|-----------|-----------------|
|contents|Estos elementos no producen una caja específica por sí mismos. Son reemplazados por su pseudo-caja y sus cajas infantiles.|
|none|Desaparece la visualización de un elemento para que no tenga ningún efecto en el diseño (el documento se representa como si el elemento no existiera). Todos los elementos descendentes también tienen su pantalla apagada.Para que un elemento ocupe el espacio que normalmente tendría, pero sin producir nada, utilice la propiedad visibility.|  

### **display-legacy**
CSS 2 usó una sintaxis de palabra clave única para la propiedad display, requiriendo palabras clave separadas para variantes de nivel de bloque e inline del mismo modo de disposición. Se definen como sigue:
| **Valor** | **Descripción** |
|-----------|-----------------|
|inline-block|El elemento genera una caja de elemento de bloque que fluye con el contenido circundante como si fuera una sola caja en línea (comportándose como un elemento reemplazado)Es equivalente a inline flow-root.|
|inline-table|El valor inline-table no tiene una asignación directa en HTML. Se comporta como un elemento HTML `<table>`, pero como un cuadro en línea, en el lugar de un cuadro a nivel de bloque. Dentro del cuadro de la tabla hay un contexto de nivel de bloque.Es equivalente a inline table.|
|inline-flex|El elemento se comporta como un elemento en línea y se establece su contenido de acuerdo con el modelo flexbox.Es equivalente a inline flex.|
|inline-grid|El elemento se comporta como un elemento en línea y se establece su contenido de acuerdo con el modelo de cuadrícula.|  

## **Accesibilidad**
### **display: none**
Al utilizar un valor de none en la propiedad display el elemento se elimina del árbol de accesibilidad. El efecto de esto será que este elemento y sus hijos no serán anunciados a los lectores de pantalla utilizados por no videntes.

Si deseas ocultar el elemento solo de forma visible, pero que los lectores de accesibilidad lo sigan anunciando, puedes utilizar un método alternativo con una combinación de propiedades de CSS.  

### **display: contents**
Los navegadores eliminarán el atributo predeterminado de role de cualquier elemento con una propiedad display que tenga un valor de contents del árbol de accesibilidad. Esto causará que los elementos y sus descendientes no sean anunciados a los lectores de pantalla.

