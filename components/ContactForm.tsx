'use client'

import React from "react"

const handleSubmit=(e:React.FormEvent)=>{
    e.preventDefault
    alert("Merci! votre message est bien ete envoyé")
}


export default function ContactForm(){
    return(
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Nom</label>
        <input 
          type="text" id="name" required
          className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
          placeholder="Votre nom"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
        <input 
          type="email" id="email" required
          className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
          placeholder="exemple@mail.com"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message</label>
        <textarea 
          id="message" rows={4} required
          className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
          placeholder="Votre message ici..."
        ></textarea>
      </div>

      <button 
        type="submit"
        className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200"
      >
        Envoyer le message
      </button>
    </form>
    )
}