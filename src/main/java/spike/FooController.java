package spike;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class FooController {
    @ResponseBody
    @RequestMapping(value = "/spike", method = RequestMethod.GET)
    public ResponseEntity<?> fooEndpoint() {
        return new ResponseEntity<String>("hello", HttpStatus.OK);

    }
}