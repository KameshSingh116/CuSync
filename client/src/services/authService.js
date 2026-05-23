import { supabase } from "./supabase";

export const signUpUser = async (
  fullName,
  email,
  password,
  role,
  department
) => {

  const { data, error } =
    await supabase.auth.signUp({
      email,
      password,
    });

  console.log("AUTH DATA:", data);
  console.log("AUTH ERROR:", error);

  if (error) {
    return { error };
  }

  if (!data?.user) {
    return {
      error: {
        message:
          "User created but verification pending",
      },
    };
  }

  const { error: insertError } =
    await supabase
      .from("users")
      .insert([
        {
          id: data.user.id,
          full_name: fullName,
          email,
          role,
          department,
        },
      ]);

  console.log("INSERT ERROR:", insertError);

  if (insertError) {
    return {
      error: insertError,
    };
  }

  return { data };
};

export const loginUser = async (
  email,
  password
) => {

  const { data, error } =
    await supabase.auth.signInWithPassword({
      email,
      password,
    });

  console.log("LOGIN DATA:", data);
  console.log("LOGIN ERROR:", error);

  return { data, error };
};

export const logoutUser = async () => {
  await supabase.auth.signOut();
};