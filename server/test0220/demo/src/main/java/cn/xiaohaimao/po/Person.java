package cn.xiaohaimao.po;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.PropertySource;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.ResponseBody;

import java.awt.*;
import java.lang.reflect.Array;
import java.util.List;
import java.util.Map;

@Component
@ConfigurationProperties(prefix = "person")
//@PropertySource("person.yml")
public class Person {
    private Integer age;
    private String name;
    private Map<String,Object> p_set;
    private List<Object> p_arr;

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Map<String, Object> getP_set() {
        return p_set;
    }

    public void setP_set(Map<String, Object> p_set) {
        this.p_set = p_set;
    }

    public List<Object> getP_arr() {
        return p_arr;
    }

    public void setP_arr(List<Object> p_arr) {
        this.p_arr = p_arr;
    }

    @Override
    public String toString() {
        return "我是重写的tostirnf";
    }
}
