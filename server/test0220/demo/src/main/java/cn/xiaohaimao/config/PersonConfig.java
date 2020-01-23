package cn.xiaohaimao.config;

import cn.xiaohaimao.po.Person;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

// 添加Configuration表明这是一个配置类，同于替代xml配置文件
@Configuration
public class PersonConfig {

    // 将返回的值添加到spring容器中，容器中的id就是方法名person
    @Bean
    public Person person2(){
        System.out.println("配置类运作中。。。。");
        Person person = new Person();
        person.setAge(45);
        return person;
    }
}
