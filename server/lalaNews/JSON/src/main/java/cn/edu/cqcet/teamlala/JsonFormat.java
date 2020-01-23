package cn.edu.cqcet.teamlala;

import java.util.HashMap;

public class JsonFormat {
    public static MyJson ok(Object data){
        MyJson myJson = new MyJson(200,"ok",data);
        return myJson;
    }
    public static MyJson serverNotWork(Object data){
        MyJson myJson = new MyJson(503,"fail",data);
        return myJson;
    }
}
