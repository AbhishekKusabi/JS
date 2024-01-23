import java.io.*;
import java.net.*;

public class TCPClient {
    public static void main(String[] args) {
        try (Socket socket = new Socket("localhost", 12345);
             BufferedReader userInput = new BufferedReader(new InputStreamReader(System.in));
             PrintWriter out = new PrintWriter(socket.getOutputStream(), true)) {

            String input;
            do {
                System.out.print("Enter message (type 'bye' to exit): ");
                input = userInput.readLine();
                out.println(input);
            } while (!input.equalsIgnoreCase("bye"));

        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}