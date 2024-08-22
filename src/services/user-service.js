import UserRepository from "../repository/user-repository.js"



class UserService {

    constructor(){
       this.UserRepository = new UserRepository();
    }
  

    async signUp(data){
        try{
       
            const user = await this.UserRepository.create(data);
            return user;

        }catch(error){
           throw error;
        }
    }


    async signIn(data){
        try{

            const email = data.email;
            const currentPassword = data.password;
            const user = await this.UserRepository.findBy({email});
            if(!user){
                throw{
                    message:'no user found'
                }
            }
            if(!user.compoarePassword(currentPassword)){
                throw{
                    message:'wrong password'
                }
            }

            console.log("user successfully signed in")
            const token = user.getJwt();
            return token;


        }catch(error){
            throw error;
        }
    }



        


}

export default UserService;