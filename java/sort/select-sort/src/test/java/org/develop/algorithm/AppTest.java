package org.develop.algorithm;

import java.util.Random;
import org.junit.Before;
import org.junit.Test;

/**
 * Unit test for simple App.
 */
public class AppTest{
   App app = new App();
   int[] one = new int[1];
   int[] two = new int[10];
   int[] three = new int[100];
   int[] four = new int[1000];
   int[] five = new int[10000];
   int[] six = new int[100000];

   @Before
   public void before(){
      one = generateRandomNumber(1);
      two = generateRandomNumber(10);
      three = generateRandomNumber(100);
      four = generateRandomNumber(1000);
      five = generateRandomNumber(10000);
      six = generateRandomNumber(100000);
   }
   @Test
   public void testDoItOne(){
      System.out.print(1 + "  ");
      app.selectSort(one);
      System.out.println("----------------");
   }    

   @Test
   public void testDoItTwo(){
      System.out.print(2 + "  ");
      app.selectSort(two);
      System.out.println("----------------");
   }
   @Test
   public void testDoItThree(){
      System.out.print(3 + "  ");
      app.selectSort(three);
      System.out.println("----------------");
   }
   @Test
   public void testDoItFour(){
      System.out.print(4 + "  ");
      app.selectSort(four);
      System.out.println("----------------");
   }
   @Test
   public void testDoItFive(){
      System.out.print(5 + "  ");
      app.selectSort(five);
      System.out.println("----------------");
   }
   @Test
   public void testDoItSix(){
      System.out.print(6 + "  ");
      app.selectSort(six);
      System.out.println("----------------");
   } 

   // @Test
   public void testDoItSeven(){
      System.out.print(7 + "  ");
      int[] seven = generateRandomNumber(1000000);
      long start = System.currentTimeMillis();
      app.selectSort(seven);
      long end = System.currentTimeMillis();
      System.out.println("----------------");
      System.out.println("耗时："+ (end - start));
   }

   public static int[] generateRandomNumber(int length){
      int[] randomArray = new int[length];
      Random random = new Random();
      for(int i=0;i<length;i++){
          randomArray[i] = random.nextInt(length);
      }
      return randomArray;
  }
}
