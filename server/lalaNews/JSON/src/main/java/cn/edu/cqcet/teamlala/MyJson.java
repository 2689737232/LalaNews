package cn.edu.cqcet.teamlala;

import java.io.Serializable;
import java.util.HashMap;
import java.util.Map;

public class MyJson implements Serializable {
    private  Integer code;
    private  String status;
    private  Map<String,Object> msg;

    public Integer getCode() {
        return code;
    }

    public void setCode(Integer code) {
        this.code = code;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Map<String, Object> getMsg() {
        return msg;
    }

    public void setMsg(Map<String, Object> msg) {
        this.msg = msg;
    }

    public MyJson(Integer code, String status, Object data) {
        this.code = code;
        this.status = status;
        this.msg = new HashMap<>();
        this.msg.put("data",data);
    }
}
