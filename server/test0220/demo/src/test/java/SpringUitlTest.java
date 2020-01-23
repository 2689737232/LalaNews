import cn.xiaohaimao.DemoApplication;
import cn.xiaohaimao.po.Person;
import javafx.application.Application;
import org.apache.catalina.core.ApplicationContext;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.BeanFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = DemoApplication.class)
public class SpringUitlTest {
    @Autowired
    private Person person;
    @Autowired
    private BeanFactory beanFactory;
    @Test
    public void testPerson(){
        System.out.println(beanFactory.containsBean("person2"));
        Person person = (Person) beanFactory.getBean("person2");
        System.out.println(person);
    }

}
