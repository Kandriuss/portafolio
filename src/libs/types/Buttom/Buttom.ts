export type ButtomProps = {
    label: string; //Texto del botón
    onClick: () => void;    //Función que se ejecuta al hacer clic en el botón
    type?: 'button' | 'submit' | 'reset'; //Tipo de botón
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'success' | 'warning'; //Variante del botón
    size?: 'small' | 'medium' | 'large'; //Tamaño del botón
    disabled?: boolean; //Deshabilitar el botón
}
