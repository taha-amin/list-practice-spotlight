const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5tZ21ka3dhdGNtcXJleHZ3aHFsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDc5NzA2MTcsImV4cCI6MTk2MzU0NjYxN30.3xHneXPhk8TMzUGRgqhQh9EMm_NmROG5YLi0ZnrTNUY';
const SUPABASE_URL = 'https://nmgmdkwatcmqrexvwhql.supabase.co';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

//exporting pizzas 
export async function getPizzas() {
    const response = await client
        .from('pizza')
        .select('*');

    return response.body;
}

//exporting clothes
export async function getClothings() {
    const response = await client
        .from('clothings')
        .select('*');

    return response.body;
}

//exporting books
export async function getBooks() {
    const response = await client
        .from('books')
        .select('*');

    return response.body;
}

//exporting candies
export async function getCandies() {
    const response = await client
        .from('candies')
        .select('*');

    return response.body;
}