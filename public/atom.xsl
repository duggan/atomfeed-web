<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:atom="http://www.w3.org/2005/Atom">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>

  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml" lang="en">
      <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>
          <xsl:value-of select="/atom:feed/atom:title"/>
 - Atom Feed</title>
        <style>
          :root {
            color-scheme: light dark;
          }
          
          body {
            max-width: 56rem;
            margin: 0 auto;
            padding: 2rem 1rem;
            font-family: system-ui, -apple-system, sans-serif;
            line-height: 1.6;
            color: #1a1a1a;
            background: #fff;
          }

          @media (prefers-color-scheme: dark) {
            body {
              color: #e5e5e5;
              background: #1a1a1a;
            }
          }

          .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 2rem;
            padding-bottom: 1rem;
            border-bottom: 1px solid #e5e5e5;
          }

          .feed-info {
            flex: 1;
          }

          .feed-title {
            font-size: 2rem;
            font-weight: bold;
            margin: 0 0 0.5rem 0;
          }

          .feed-subtitle {
            color: #666;
            margin: 0;
          }

          .raw-feed {
            color: #666;
            text-decoration: none;
          }

          .raw-feed:hover {
            text-decoration: underline;
          }

          .article {
            margin-bottom: 2rem;
            padding: 1.5rem;
            border: 1px solid #e5e5e5;
            border-radius: 0.5rem;
          }

          @media (prefers-color-scheme: dark) {
            .article {
              border-color: #333;
            }
          }

          .article:hover {
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          }

          .article-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 1rem;
          }

          .article-title {
            font-size: 1.5rem;
            font-weight: 600;
            margin: 0 0 0.5rem 0;
          }

          .article-title a {
            color: #2563eb;
            text-decoration: none;
          }

          .article-title a:hover {
            color: #1d4ed8;
          }

          .article-meta {
            font-size: 0.875rem;
            color: #666;
          }

          .article-categories {
            display: flex;
            gap: 0.5rem;
            flex-wrap: wrap;
            margin: 0.5rem 0;
          }

          .article-content {
            margin: 1rem 0;
          }

          /* Add specific styling for HTML content */
          .article-content.type-html * {
            margin: revert;
            padding: revert;
          }

          .category {
            background: #f3f4f6;
            padding: 0.25rem 0.75rem;
            border-radius: 9999px;
            font-size: 0.875rem;
            color: #666;
          }

          @media (prefers-color-scheme: dark) {
            .category {
              background: #333;
            }
            .article-meta, .feed-subtitle, .raw-feed {
              color: #999;
            }
            .article-title a {
              color: #60a5fa;
            }
            .article-title a:hover {
              color: #93c5fd;
            }
          }

          .date {
            white-space: nowrap;
          }
        </style>
      </head>
      <body>
        <div class="header">
          <div class="feed-info">
            <h1 class="feed-title">
              <xsl:value-of select="/atom:feed/atom:title"/>
            </h1>
            <xsl:if test="/atom:feed/atom:subtitle">
              <p class="feed-subtitle">
                <xsl:value-of select="/atom:feed/atom:subtitle"/>
              </p>
            </xsl:if>
          </div>
          <a href="/atom.xml?format=raw" class="raw-feed" title="View raw Atom feed">View Raw Feed</a>
        </div>

        <main>
          <xsl:for-each select="/atom:feed/atom:entry">
            <article class="article">
              <div class="article-header">
                <div>
                  <h2 class="article-title">
                    <a href="{atom:link[@rel='alternate']/@href}">
                      <xsl:value-of select="atom:title"/>
                    </a>
                  </h2>
                  <xsl:if test="atom:category">
                    <div class="article-categories">
                      <xsl:for-each select="atom:category">
                        <span class="category">
                          <xsl:value-of select="@term"/>
                        </span>
                      </xsl:for-each>
                    </div>
                  </xsl:if>
                </div>
                <div class="article-meta">
                  <time class="date">
                    <xsl:value-of select="substring(atom:published, 1, 10)"/>
                  </time>
                </div>
              </div>

              <!-- Content handling -->
              <xsl:if test="atom:content">
                <div class="article-content">
                  <xsl:attribute name="class">
                    article-content type-<xsl:value-of select="atom:content/@type"/>
                  </xsl:attribute>
                  <xsl:choose>
                    <xsl:when test="atom:content/@type = 'html'">
                      <xsl:value-of select="atom:content" disable-output-escaping="yes"/>
                    </xsl:when>
                    <xsl:when test="atom:content/@type = 'xhtml'">
                      <xsl:copy-of select="atom:content/xhtml:div"/>
                    </xsl:when>
                    <xsl:otherwise>
                      <xsl:value-of select="atom:content"/>
                    </xsl:otherwise>
                  </xsl:choose>
                </div>
              </xsl:if>

              <!-- Fallback to summary if no content -->
              <xsl:if test="not(atom:content) and atom:summary">
                <div class="article-content">
                  <xsl:value-of select="atom:summary"/>
                </div>
              </xsl:if>

              <div class="article-meta">
                <xsl:for-each select="atom:author">
                  <xsl:if test="position() > 1">, </xsl:if>
                  <xsl:value-of select="atom:name"/>
                </xsl:for-each>
                <xsl:if test="atom:updated and atom:updated != atom:published">
                  · Updated <xsl:value-of select="substring(atom:updated, 1, 10)"/>
                </xsl:if>
              </div>
            </article>
          </xsl:for-each>
        </main>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>