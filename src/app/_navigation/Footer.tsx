import React from 'react';
import { Instagram, Facebook } from 'lucide-react';
import { editorial } from "@/lib/font";

export default function Footer() {
    return (
        <footer className="border-t border-red-500 pt-4 text-red-500">
            <div className="px-4  mx-auto">
                <h2 className={`${editorial.className} text-4xl md:text-6xl lg:text-8xl my-4 md:my-8`}>
                    Subscribe to get 10% off.
                </h2>

                <div className="flex flex-col sm:flex-row my-6 md:my-12 gap-4">
                    <input
                        type="email"
                        placeholder="Email Address"
                        className="flex-grow text-xl md:text-2xl lg:text-3xl px-4 md:px-6 py-2 md:py-3 border border-red-500 rounded-full placeholder-red-500 focus:outline-none"
                    />
                    <button className="text-xl md:text-2xl lg:text-3xl border border-red-500 px-6 md:px-10 py-2 rounded-full hover:bg-red-500 hover:text-white transition-colors whitespace-nowrap">
                        Reveal Code
                    </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    <div>
                        <h3 className="font-bold mb-2">Location</h3>
                        <p>161 Newcastle Street Fyshwick,</p>
                        <p>Australian Capital Territory</p>
                        <p>Australia 2609</p>
                    </div>

                    <div>
                        <h3 className="font-bold mb-2">Follow</h3>
                        <a href="#" className="flex items-center mb-2">
                            <Instagram className="mr-2" size={18} /> Instagram
                        </a>
                        <a href="#" className="flex items-center">
                            <Facebook className="mr-2" size={18} /> Facebook
                        </a>
                    </div>

                    <div>
                        <h3 className="font-bold mb-2">Enquire</h3>
                        <a href="mailto:hello@redbrickcoffee.com.au">
                            hello@redbrickcoffee.com.au
                        </a>
                    </div>

                    <div>
                        <h3 className="font-bold mb-2">Information</h3>
                        <ul>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Brew Guides</a></li>
                            <li><a href="#">Shipping & Returns</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms and Conditions</a></li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-center border-t border-red-500 py-4 text-sm">
                    <p className="mb-2 sm:mb-0">© 2024 Redbrick Coffee. All Rights Reserved.</p>
                    <p>Site by GO:OD</p>
                </div>
            </div>

            <div className="bg-red-500 rounded-3xl mx-4 mb-7 text-white p-4 text-center mt-4">
                <p>
                    Redbrick acknowledges the First Peoples of this land and recognises
                    their continuous connection to culture, community and Country.
                    Roasting and serving on Ngunnawal and Ngambri land.
                </p>
            </div>
        </footer>
    );
}