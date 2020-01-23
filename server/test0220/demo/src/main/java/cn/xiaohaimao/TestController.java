package cn.xiaohaimao;

import cn.xiaohaimao.po.Person;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.Period;

@RestController
public class TestController {
    @Autowired
    private Person person;
    @RequestMapping("/yes")
    public Object showPerson(){
        return person;
    }
}
