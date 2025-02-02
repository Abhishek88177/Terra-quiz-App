package com.farm_bazaar.util;

import java.security.Key;

import org.springframework.stereotype.Component;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;

@Component
public class JwtUtil {
	
	
    public static final String SECRET = "5367566B59703373367639792F423F4528482B4D6251655468576D5A71347437";

    private Key getSignInKey() {
        byte[] keyBytes= Decoders.BASE64.decode(SECRET);
        return Keys.hmacShaKeyFor(keyBytes);
    }
//	 public void printSecretKey() {
//	        String encodedKey = Base64.getEncoder().encodeToString(SECRET_KEY.getEncoded());
//	        System.out.println(encodedKey);
//	    }
	public void validateToken(final String token) {
		Jwts.parserBuilder().setSigningKey(getSignInKey()).build().parseClaimsJws(token);
	}
	
}
