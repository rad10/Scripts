import java.lang.Math;
import java.util.Scanner;
import java.util.ArrayList;
class Calculator
{
	public static String findChar(String line){
		if (line.indexOf("x")!=-1){return "x";}
		else if(line.indexOf("/")!=-1){return "/";}
		else if(line.indexOf("-")!=-1){return "-";}
		else if(line.indexOf("@")!=-1){return "@";}
		else {return "!";}
	}
	public static int operator(int a,String operand,int b){
		switch(operand){
			case"x":return a*b;
			case"/":return a/b;
			case"-":return a-b;
			case"@":return a+b;
			case"!":return 0;
			default:return 0;
		}
	}
	public static void main(String args[])
	{
			String inputA;
			Scanner input = new Scanner(System.in);
			System.out.print("use + to add; ");
			System.out.print("use - to subtract; ");
			System.out.print("use * to multiply; ");
			System.out.println("use / to divide");
			System.out.println("to end, press enter without any numbers showing");
			System.out.print("Give an equation: ");
			
			inputA = input.nextLine();
			inputA = inputA.replaceAll("\\+","@");
			inputA = inputA.replaceAll("\\*","x");
			if (inputA!="off"){
			int a=Integer.parseInt(inputA.split(findChar(inputA))[0]);
			int b=Integer.parseInt(inputA.split(findChar(inputA))[1]);
			int f=operator(a,findChar(inputA),b);
			int c;
			System.out.print("("+f+")");
			String nxt=input.nextLine();
			while (nxt.equals("")!=true){
				nxt = nxt.replaceAll("\\+","@");
				nxt = nxt.replaceAll("\\*","x");
				c=Integer.parseInt(nxt.split(findChar(nxt))[1]);
				f=operator(f,findChar(nxt),c);
				System.out.print("("+f+")");
				nxt=input.nextLine();
			}
			System.out.println("\nAnswer: "+f);}
	}
}