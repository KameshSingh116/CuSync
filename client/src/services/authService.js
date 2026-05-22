import { supabase } from "./supabase";

export const signUpUser = async (
  fullName,
  email,
  password,
  role,
  department
) => {

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    return { error };
  }

  const userId = data.user.id;

  await supabase.from("users").insert([
    {
      id: userId,
      full_name: fullName,
      email,
      role,
      department,
    },
  ]);

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

  return { data, error };
};

export const logoutUser = async () => {
  await supabase.auth.signOut();
};