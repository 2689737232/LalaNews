package cn.edu.cqcet.teamlala;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

public class Test {
    public static void main(String[] args) {
        Date date = new Date();
        DateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String string  = simpleDateFormat.format(date);
        System.out.println(string);
    }
}
