import { useForm } from "react-hook-form";
import { zodResolver }  from "@hookform/resolvers/zod";
import { z } from "zod";
import { supabase } from "../lib/supabase";
import { useNavigate } from "react-router-dom";

const formSchema = z.object({
	email: z.string().email(),
	password: z.string().min(6, "password should have more then 6 chapters")
});

type FormData = z.infer<typeof formSchema>;

function Register() {

	  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const navigate = useNavigate();

  const onSubmit = async (data: FormData) => {
	const {error} = await supabase.auth.signUp({
		email: data.email,
		password: data.password,
	})
	if(error){
		alert(error)
	}else{
		alert("check your email for verefication");
		navigate("/login")
	}
  };


 return (
    <div className="max-w-md mx-auto mt-[20%]">
      <h1 className="text-2xl font-bold mb-4 text-sky-500">Register</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        

		<div className="w-full max-w-md min-w-[200px] flex-col gap-3">

  <div className="relative mb-[10px]">
	<input
            {...register("email")}
            className="peer w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-md border border-slate-200 rounded-[16px] px-3 py-3.5 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
          />
          <label className="absolute cursor-text bg-white px-1 left-2.5 top-4 text-slate-400 text-sm transition-all transform origin-left peer-focus:-top-2 peer-focus:left-2.5 peer-focus:text-xs peer-focus:text-slate-400 peer-focus:scale-90">Email</label>
          
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

  <div className="relative">
    <input
	type="password"
            {...register("password")}
      className="peer w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-md border border-slate-200 rounded-[16px] px-3 py-3.5 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
    />
    <label className="absolute cursor-text bg-white px-1 left-2.5 top-4 text-slate-400 text-sm transition-all transform origin-left peer-focus:-top-2 peer-focus:left-2.5 peer-focus:text-xs peer-focus:text-slate-400 peer-focus:scale-90">
      Password
    </label>
	{errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
  </div>
</div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-sky-500 text-white p-3.5 rounded-[16px] hover:bg-white hover:text-sky-500 hover:shadow hover:bg-white transition-all transform"
        >
          {isSubmitting ? "Registering..." : "Register"}
        </button>
      </form>
    </div>
  );
}

export default Register