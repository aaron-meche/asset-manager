import { 
    createClient
} from '@supabase/supabase-js'

const supabaseUrl = 'https://plqwdxvaqdmrpcvxmzka.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBscXdkeHZhcWRtcnBjdnhtemthIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODMwNTgzMzUsImV4cCI6MTk5ODYzNDMzNX0.if4vXcNgqnL6ifGOS664VR3DDs0tHK6Ur8EGew1KAMo'
const supabase = createClient(supabaseUrl, supabaseKey)

export const db = {
    read: async function(table, callback, column) {
        column = column == undefined ? '*' : column
        const { data, error } = await supabase.from(table).select(column)
        if (error) {
            console.error('Error reading data:', error)
            callback(null)
        }
        callback(data)
    },
    signInWithGoogle: async function() {
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: 'google',
        })
    },
}

export async function readDB(tableName) {
    const { data, error } = await supabase.from(tableName).select('*')
    if (error) {
        console.error('Error reading data:', error)
        return null
    }
    return data
}