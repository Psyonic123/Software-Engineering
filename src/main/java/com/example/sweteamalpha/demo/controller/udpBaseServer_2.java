package com.example.sweteamalpha.demo.controller;

import java.io.IOException;
import java.net.DatagramPacket;
import java.net.DatagramSocket;
import java.net.*;
import org.json.simple.*;

public class udpBaseServer_2 {

    public static void main(String[] args) throws SocketException {
        System.out.println("main being called");
    }

    public JSONObject startServer() throws IOException {
        // Step 1 : Create a socket to listen at port 1234
        System.out.println("Start being called");

        DatagramSocket ds = new DatagramSocket(1234);
        ds.setReuseAddress(true);
        byte[] receive = new byte[65535];

        DatagramPacket DpReceive = null;
        DpReceive = new DatagramPacket(receive, receive.length);

        // Step 3 : revieve the data in byte buffer.
        ds.receive(DpReceive);
        System.out.println("Client:-" + data(receive));

        JSONObject json = new JSONObject();
        String data = data(receive).toString();

        json.put("data", data);
        receive = new byte[65535];
        ds.close();
        return json;
    }

    // A utility method to convert the byte array
    // data into a string representation.
    public static StringBuilder data(byte[] a) {
        if (a == null)
            return null;
        StringBuilder ret = new StringBuilder();
        int i = 0;
        while (a[i] != 0) {
            ret.append((char) a[i]);
            i++;
        }
        return ret;
    }
}