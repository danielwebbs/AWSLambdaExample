import com.amazonaws.services.lambda.runtime.ClientContext
import com.amazonaws.services.lambda.runtime.CognitoIdentity
import com.amazonaws.services.lambda.runtime.Context
import com.amazonaws.services.lambda.runtime.LambdaLogger

/**
 * Created by Sab3r on 2016/02/07.
 */
def hello = new Hello()


def map = hello.myHandler(new Person("Steven", "van der Merwe"), new myContext() )

println(map.greeting)
println(map.test)


