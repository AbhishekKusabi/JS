import java.io.*;
import java.net.*;

public class TCPServer {
    public static void main(String[] args) {
        try (ServerSocket serverSocket = new ServerSocket(12345)) {
            System.out.println("Server is listening on port 12345...");
            Socket clientSocket = serverSocket.accept();
            BufferedReader in = new BufferedReader(new InputStreamReader(clientSocket.getInputStream()));
            PrintWriter out = new PrintWriter(clientSocket.getOutputStream(), true);

            String input;
            do {
                input = in.readLine();
                System.out.println("Client: " + input);
            } while (!input.equalsIgnoreCase("bye"));

            System.out.println("Connection closed by client.");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}