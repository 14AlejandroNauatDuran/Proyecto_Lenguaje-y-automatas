
package hilo2;

import java.util.Random;


public class Hilo2 implements Runnable{

    private final int tiempo;//cuando se usa el final es una constante
    private String nombreProceso;
    private final static Random generador = new Random();
    
    public Hilo2(String nombre){
        nombreProceso = nombre;
        tiempo = generador.nextInt(5000);
    }

    public void run(){
        
        try{
            System.out.println(nombreProceso + " inactivado por " + tiempo + " milisegundos");
            Thread.sleep(tiempo);
            System.out.println(nombreProceso + " despertando y finalizando");
        }catch(InterruptedException ex){
            ex.printStackTrace();//imprime el rastreo del proceso ue genero el error
            System.out.println(nombreProceso + " tuvo un error.");
        }
    }
    
    
}
