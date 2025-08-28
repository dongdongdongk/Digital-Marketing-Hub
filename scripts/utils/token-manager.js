/**
 * token-manager.js
 * 블로그 삭제 토큰 생성 및 검증 모듈
 */

const jwt = require('jsonwebtoken');
const crypto = require('crypto');

class TokenManager {
  constructor() {
    // JWT 시크릿 키 생성 (환경변수에서 가져오거나 랜덤 생성)
    this.jwtSecret = process.env.JWT_SECRET || this.generateSecret();
    this.tokenExpiry = '7d'; // 7일 만료
  }

  /**
   * 랜덤 시크릿 키 생성
   */
  generateSecret() {
    return crypto.randomBytes(64).toString('hex');
  }

  /**
   * 블로그 삭제 토큰 생성
   * @param {string} filename - 블로그 파일명
   * @param {string} title - 블로그 제목
   * @returns {string} JWT 토큰
   */
  generateDeleteToken(filename, title) {
    const payload = {
      type: 'delete_blog',
      filename: filename,
      title: title,
      createdAt: new Date().toISOString(),
      iat: Math.floor(Date.now() / 1000)
    };

    return jwt.sign(payload, this.jwtSecret, { 
      expiresIn: this.tokenExpiry,
      issuer: 'webmaker-ai-blog',
      subject: 'blog-deletion'
    });
  }

  /**
   * 토큰 검증 및 디코드
   * @param {string} token - JWT 토큰
   * @returns {object} 디코드된 토큰 데이터 또는 null
   */
  verifyDeleteToken(token) {
    try {
      const decoded = jwt.verify(token, this.jwtSecret, {
        issuer: 'webmaker-ai-blog',
        subject: 'blog-deletion'
      });

      // 토큰 타입 검증
      if (decoded.type !== 'delete_blog') {
        throw new Error('Invalid token type');
      }

      return decoded;
    } catch (error) {
      console.error('Token verification failed:', error.message);
      return null;
    }
  }

  /**
   * 토큰 정보 가져오기 (검증 없이)
   * @param {string} token - JWT 토큰
   * @returns {object} 디코드된 토큰 데이터 또는 null
   */
  decodeToken(token) {
    try {
      return jwt.decode(token);
    } catch (error) {
      console.error('Token decode failed:', error.message);
      return null;
    }
  }

  /**
   * 토큰 만료 시간 확인
   * @param {string} token - JWT 토큰
   * @returns {Date|null} 만료 시간
   */
  getTokenExpiry(token) {
    try {
      const decoded = jwt.decode(token);
      if (decoded && decoded.exp) {
        return new Date(decoded.exp * 1000);
      }
      return null;
    } catch (error) {
      console.error('Get token expiry failed:', error.message);
      return null;
    }
  }

  /**
   * 토큰 유효성 검사 (만료 시간만)
   * @param {string} token - JWT 토큰
   * @returns {boolean} 유효 여부
   */
  isTokenExpired(token) {
    try {
      const decoded = jwt.decode(token);
      if (!decoded || !decoded.exp) {
        return true;
      }
      
      const now = Math.floor(Date.now() / 1000);
      return decoded.exp < now;
    } catch (error) {
      console.error('Token expiry check failed:', error.message);
      return true;
    }
  }

  /**
   * 삭제 URL 생성
   * @param {string} filename - 블로그 파일명
   * @param {string} title - 블로그 제목
   * @param {string} baseUrl - 사이트 기본 URL
   * @returns {string} 삭제 URL
   */
  generateDeleteUrl(filename, title, baseUrl) {
    const token = this.generateDeleteToken(filename, title);
    return `${baseUrl}/api/delete-blog?token=${encodeURIComponent(token)}`;
  }
}

module.exports = TokenManager;